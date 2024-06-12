import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

type Team = {
    name: string;
    shield: string;
    titles: { name: string; count: number }[];
};

const allTitles = ['Mundial', 'Libertadores', 'Campeonato Brasileiro', 'Copa do Brasil'];

const TitleItem: React.FC<{ title: string; count: number }> = ({ title, count }) => (
    <View style={styles.titleItem}>
        <Text style={styles.titleName}>{title}</Text>
        <Text style={styles.titleCount}>{`${count}x`}</Text>
    </View>
);

const CompareTeamsScreen: React.FC = () => {
    const params = useLocalSearchParams();
    const teamsString = Array.isArray(params.teams) ? params.teams[0] : params.teams;
    const teams: Team[] = teamsString ? JSON.parse(teamsString) : [];

    return (
        <View style={styles.container}>
            <View style={[styles.teams, { justifyContent: 'space-between' }]}>
                {teams.map((team, index) => (
                    <View key={index}>
                        <Text style={styles.teamName}>{team.name}</Text>
                        <Image source={{ uri: team?.shield }} style={styles.shield} />
                    </View>
                ))}
            </View>

            <View style={styles.tableContainer}>
                <Text style={styles.header}>Títulos</Text>

                <View style={styles.table}>
                    {allTitles.map((title, index) => (
                        <View key={index} style={styles.row}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.typeTitle}>{title}</Text>
                            </View>

                            <View style={styles.valueContainer}>
                                {teams.map((team, teamIndex) => (
                                    <React.Fragment key={teamIndex}>
                                        <Text style={styles.valueText}>
                                            {team?.titles?.find(t => t.name === title)?.count !== undefined ?
                                                team.titles.find(t => t.name === title)?.count :
                                                'ERROR'}
                                        </Text>
                                        {teamIndex !== teams.length - 1 && <Text> X </Text>}
                                    </React.Fragment>
                                ))}
                            </View>


                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    teams: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
    },
    teamName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    typeTitle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10,
    },
    shield: {
        width: 80,
        height: 80,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    tableContainer: {
        flex: 1,
        width: '100%',
    },
    table: {
        backgroundColor: '#f8f8f8', // Cor de fundo
        borderRadius: 10, // Bordas arredondadas
        marginTop: 20,
        padding: 10, // Espaçamento interno
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Sombra,
        width: '100%', // Ocupa toda a largura da tela
    },
    titleContainer: {
        marginBottom: 5,
        padding: 5,
        backgroundColor: '#e0e0e0', // Cor de fundo do contêiner do título
        borderRadius: 5, // Bordas arredondadas
    },
    row: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 5,
    },
    valueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: '#ffffff', // Cor de fundo do contêiner de valores
        borderRadius: 20, // Bordas arredondadas
        borderWidth: 1, // Adiciona uma borda para separar visualmente os valores
        borderColor: '#e0e0e0', // Cor da borda
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    titleName: {
        fontSize: 16,
    },
    titleCount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    valueText: {
        fontSize: 14,
        fontWeight: 'bold',
        borderRadius: 20, // Bordas arredondadas
        paddingHorizontal: 10, // Espaçamento interno horizontal
        paddingVertical: 5, // Espaçamento interno vertical
        backgroundColor: '#ADD8E6',
        color: '#000', // Cor do texto
    },
});

export default CompareTeamsScreen;
