import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

const TeamDetailScreen: React.FC = () => {
    const params = useLocalSearchParams();
    const teamString = Array.isArray(params.team) ? params.team[0] : params.team;
    const team = teamString ? JSON.parse(teamString) : null;

    if (!team) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Erro ao carregar os detalhes do time.</Text>
            </View>
        );
    }

    const topics = [
        { id: '1', title: 'Títulos' },
        { id: '2', title: 'Artilheiros da história' },
        { id: '3', title: 'Elenco atual' },
    ];

    const handlePress = (topic: string) => {
        if(topic === 'Títulos'){
            router.push({ pathname: "/teamTitles", params: { team: JSON.stringify(team) } });
        } else if (topic === 'Artilheiros da história'){
            router.push({ pathname: "/teamArtilheiros", params: { team: JSON.stringify(team) } });

        } else if (topic === 'Elenco atual'){
            router.push({ pathname: "/teamTitles", params: { team: JSON.stringify(team) } });
        }
    };

    const renderTopic = ({ item }: { item: { id: string; title: string } }) => (
        <TouchableOpacity style={styles.topicItem} onPress={() => handlePress(item.title)}>
            <Text style={styles.topicTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.teamName}>{team.name}</Text>
            <Image source={{ uri: team.shield }} style={styles.shield} />
            <Text>Fundação:{team.fundacao}</Text>
            <FlatList
                data={topics}
                keyExtractor={(item) => item.id}
                renderItem={renderTopic}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    shield: {
        width: 100,
        height: 100,
        marginVertical: 16,
        resizeMode: 'contain',
    },
    teamName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    list: {
        width: '100%',
    },
    topicItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    topicTitle: {
        fontSize: 18,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});

export default TeamDetailScreen;
