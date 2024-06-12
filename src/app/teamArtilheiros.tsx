import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import for icons


type TeamTitlesProps = {
    titles: { name: string; count: number }[];
};

const TeamTitlesScreen: React.FC<TeamTitlesProps> = () => {
    const teamString = useLocalSearchParams().team;
    const team = teamString ? (Array.isArray(teamString) ? JSON.parse(teamString[0]) : JSON.parse(teamString)) : null;
    const artilheiros = team ? team.artilheiros : [];

    const renderTitle = ({ item, index }: { item: { nome: string; gols: number }; index: number }) => (
        <View style={styles.titleItem}>
            <Text>{index + 1}</Text>
            <Text style={styles.titleCompetition}>{item.nome}</Text>
            <Text style={styles.titleYear}>{`${item.gols}`}</Text>
        </View>
    );


    return (
        <View style={styles.container}>
            <Image source={{ uri: team?.shield }} style={styles.shield} />
            {/* Added labels above the FlatList */}
            <View style={styles.titlesHeader}>
            <MaterialCommunityIcons name="trophy" size={24} style={styles.icon} />
            <MaterialCommunityIcons name="account" size={24} style={styles.icon} />
                <MaterialCommunityIcons name="soccer" size={24} style={styles.icon} />
            </View>
            <FlatList
                data={artilheiros}
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
    titlesHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16, // Add some space between the labels and the FlatList
        padding: 10,
    },
    titlePosition: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
      },
});


export default TeamTitlesScreen;
