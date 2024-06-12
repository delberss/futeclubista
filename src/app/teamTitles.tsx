import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

type TeamTitlesProps = {
    titles: { name: string; count: number }[];
};

const TeamArtilheiros: React.FC<TeamTitlesProps> = () => {
    const teamString = useLocalSearchParams().team;
    const team = teamString ? (Array.isArray(teamString) ? JSON.parse(teamString[0]) : JSON.parse(teamString)) : null;
    const titles = team ? team.titles : [];

    const renderTitle = ({ item }: { item: { name: string; count: number } }) => (
        <View style={styles.titleItem}>
            <Text style={styles.titleCompetition}>{item.name}</Text>
            <Text style={styles.titleYear}>{`${item.count}`}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Image source={{ uri: team?.shield }} style={styles.shield} />
            <FlatList
                data={titles}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderTitle}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    shield: {
        width: 100,
        height: 100,
        marginVertical: 16,
        resizeMode: 'contain',
    },
    list: {
        width: '100%',
    },
    titleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    titleYear: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleCompetition: {
        fontSize: 16,
        color: '#666',
    },
});

export default TeamArtilheiros;
