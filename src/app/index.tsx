import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import teams from './times/times';
import { router } from 'expo-router';

type Team = {
    name: string;
    shield: string; // URL of the team's shield image
};

teams.sort((a, b) => a.name.localeCompare(b.name));

const handlePress = (team: Team) => {
    router.push({ pathname: "/teamDetail", params: { team: JSON.stringify(team) } });
};

const SelectTeamScreen: React.FC = () => {
    
    const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
    const [longPressTimeout, setLongPressTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleSelectTeam = (team: Team) => {
        if (selectedTeams.length === 0) {
            handlePress(team);
            return;
        }
        setSelectedTeams((prev) => {
            const alreadySelected = prev.some((t) => t.name === team.name);
            if (alreadySelected) {
                return prev.filter((t) => t.name !== team.name);
            } else if (prev.length === 2) {
                return [prev[0], team];
            } else {
                return [...prev, team];
            }
        });
    };

    const handleLongPress = (team: Team) => {
        setLongPressTimeout(
            setTimeout(() => {
                setSelectedTeams((prev) => {
                    const alreadySelected = prev.some((t) => t.name === team.name);
                    if (!alreadySelected && prev.length < 2) {
                        return [...prev, team];
                    }
                    return prev;
                });
            }, 500)
        );
    };

    const handleComparePress = () => {
        router.push({ pathname: "/compareTeams", params: { teams: JSON.stringify(selectedTeams) } });
    };

    const renderTeam = ({ item }: { item: Team }) => (
        <TouchableOpacity
            style={[
                styles.teamItem,
                selectedTeams.some((t) => t.name === item.name) && styles.selectedTeamItem
            ]}
            onPress={() => handleSelectTeam(item)}
            onLongPress={() => handleLongPress(item)}
        >
            <Image source={{ uri: item.shield }} style={styles.shield} />
            <Text style={styles.teamName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>
                Toque em um time para visualizar detalhes ou pressione e segure para selecioná-lo para comparação. (Máximo de 2 times)
            </Text>
            <FlatList
                data={teams}
                keyExtractor={(item) => item.name}
                renderItem={renderTeam}
            />
            {selectedTeams.length === 2 && (
                <Button title="Comparar" onPress={handleComparePress} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    mainTitle: {
        padding: 10,
        color: '#003300', // Verde escuro
    },
    teamItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    selectedTeamItem: {
        backgroundColor: '#ADD8E6', // Cor de fundo azul claro para times selecionados
    },
    shield: {
        width: 40,
        height: 40,
        marginRight: 16,
        resizeMode: 'contain',
    },
    teamName: {
        fontSize: 18,
    }
});

export default SelectTeamScreen;
