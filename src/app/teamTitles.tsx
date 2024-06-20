import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

type TitleCategory = {
    mundiais: { name: string; count: number }[];
    internacionais: { name: string; count: number }[];
    nacionais: { name: string; count: number }[];
    estaduais: { name: string; count: number }[];
};

type Team = {
    name: string;
    shield: string;
    fundacao: string;
    titles: TitleCategory[];
};

const TeamTitles: React.FC = () => {
    const teamString = useLocalSearchParams().team;
    const team: Team | null = teamString ? (Array.isArray(teamString) ? JSON.parse(teamString[0]) : JSON.parse(teamString)) : null;
    const titles: TitleCategory[] = team ? team.titles : [];

    const renderItem = ({ item }: { item: { [key: string]: { name: string; count: number }[] } }) => {
        return (
            <View style={styles.container}>
                <Image source={{ uri: team?.shield }} style={styles.shield} />
                <FlatList
                    data={Object.entries(item)}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <>
                            <Text style={styles.categoryTitle}>{item[0]?.charAt(0).toUpperCase() + item[0].slice(1)}</Text>
                            {item[1]?.map((title, index) => (
                                <View key={index} style={styles.titleItem}>
                                    <Text style={styles.titleCompetition}>{title.name}</Text>
                                    <Text style={styles.titleYear}>{`${title.count}`}</Text>
                                </View>
                            ))}
                        </>
                    )}
                    style={styles.list}
                />
            </View>
        );
    };

    if (!team) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Erro ao carregar os detalhes do time.</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={titles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
        />
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    shield: {
        width: 100,
        height: 100,
        marginVertical: 20,
        resizeMode: 'contain',
    },
    list: {
        width: '100%',
    },
    titleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingHorizontal: 25,
    },
    titleYear: {
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 40,
        paddingHorizontal: 12,
        marginLeft: 10,
        paddingVertical: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.100)',
        color: '#000',
    },
    titleCompetition: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
    },
    categoryTitle: {
        backgroundColor: 'rgba(0, 0, 0, 0.582)',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
        marginVertical: 10,
        width: '100%',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});

export default TeamTitles;
