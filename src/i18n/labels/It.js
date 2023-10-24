import Helpers from '../../common/Helpers'

const gameConfigs = {
    HH: {
        ragazze: 'ragazze',
        leragazze: 'le ragazze',
        alleragazze: 'alle ragazze',
        delleragazze: 'delle ragazze',
        dellaragazza: 'della ragazza',
        fiori: 'ai fiori',
    },
    GH: {
        ragazze: 'ragazzi',
        leragazze: 'i ragazzi',
        alleragazze: 'ai ragazzi',
        delleragazze: 'dei ragazzi',
        dellaragazza: 'del ragazzo',
        fiori: 'ai lecca-lecca',
    },
    CxH: {
        ragazze: 'ragazze',
        leragazze: 'le ragazze',
        alleragazze: 'alle ragazze',
        delleragazze: 'delle ragazze',
        dellaragazza: 'della ragazza',
        fiori: 'ai gioelli',
    },
    PSH: {
        ragazze: 'ragazze',
        leragazze: 'le ragazze',
        alleragazze: 'alle ragazze',
        delleragazze: 'delle ragazze',
        dellaragazza: 'della ragazza',
        fiori: 'alla birra',
    },
    HoH: {
        ragazze: 'ragazze',
        leragazze: 'le ragazze',
        alleragazze: 'alle ragazze',
        delleragazze: 'delle ragazze',
        dellaragazza: 'della ragazza',
        fiori: 'ai fiori',
    },
}
const gameConfig = gameConfigs[Helpers.getGameKey()]

export const common = {
    all: 'Tutti',
}

export const config = {
    refresh: 'Ricarica pagina principale',
    villain: 'Menù battaglia Troll',
    villain_tiers: `Mostra battaglie con ${gameConfig.ragazze}`,
    market: 'Informazioni negozio',
    marketEquipsFilter: 'Filtro per oggetti nel mercato',
    harem: 'Informazioni Harem',
    league: 'Informazioni sulle Leghe',
    league_board: 'Mostra i top della lega',
    league_promo: 'Mostra informazioni sulla promozione',
    simFight: 'Simulazione Leghe / Stagione / Troll',
    simFight_logging: 'Log dettagliati nella console del browser',
    teamsFilter: 'Filtro delle squadre',
    champions: 'Informazioni sui Campioni',
    champions_poseMatching: 'Aggiungi indicatori di corrispondenza delle pose',
    champions_fixPower: `Normalizza la potenza ${gameConfig.delleragazze} per il confronto`,
    homeScreen: 'Scorciatoie e timer nella schermata principale',
    homeScreen_leaguePos: 'Mostra la posizione attuale nella lega (effettua una chiamata di rete addizionale)',
    resourceBars: 'Barre di risorse / Monitoraggio dei booster',
    popSort: 'LdP: ordinamento e navigazione rapida',
    seasonStats: 'Statistiche di stagione',
    pachinkoNames: 'Mostra i nomi nel Pachinko',
    contestSummary: 'Riepilogo dei premi salvati dei contest',
    battleEndstate: 'Mostra i valori finali dopo aver saltato la battaglia',
    gemStock: 'Scorte di gemme nel Mercato/Harem',
    staticBackground: 'Impedisci il cambio di sfondo durante i giorni dell\'orgia',
    rewardShards:  `Mostra il conteggio attuale dei frammenti sulle ricompense ${gameConfig.delleragazze}`,
    hideClaimedRewards: 'Nascondi ricompense riscosse',
    disableDragDrop: 'Disabilita il drag-and-drop nel mercato',
    villainBreadcrumbs: 'Aggiungi link di navigazione alle pagine dei Troll',
    blessingSpreadsheetLink: 'Aggiungi il link al foglio di calcolo delle benedizioni nel popup delle benedizioni',
    homeScreenIcons: 'Aggiungi icone caratteristiche ai link della schermata principale',
    homeScreenOrder: 'Disposizione alternativa dei link nella schermata principale',
    homeScreenOldish: 'Vecchia schermata principale (Non compatibile con lo stile riorganizzato sul lato destro)',
    overridePachinkoConfirm: `Disattiva i pop-up di avviso "${Helpers.isGH() ? 'Nessun ragazzo' : 'Nessuna ragazza'} disponibile" in Pachinko/NC`,
    sidequestCompletionMarkers: 'Contrassegno per le missioni secondarie completate',
    censorMode: 'Censura tutte le immagini NSFW',
    fixProfilePopup: 'Correggi i popup del profilo del giocatore',
    eventEndIndicators: 'Mostra indicatori per la fine dell\'evento nella schermata principale',
    haremTeamsFilter: 'Filtro squadra nell\'harem',
    upgradeQuickNav: 'Navigazione rapida sulla pagina di miglioramento',
    leaderboardClubmateIndicators: 'Evidenzia i membri del club nelle classifiche',
    leaderboardProfilePopups: 'Link ai profili dei giocatori nelle classifiche',
    improvedWaifu: `${Helpers.isGH()? 'Fidanzato migliorato' : 'Waifu migliorata'}`,
    sortDailyMissions: 'Ordina le missioni giornaliere per durata',
    sortDailyMissions_reverse: 'Ordine inverso',
    upgradeInfo: 'Informazioni sulla pagina di miglioramento',
    leagueQuickNav: 'Navigazione rapida tra avversari Lega'
}
export const stConfig = {
    missionsBackground: 'Cambia lo sfondo delle missioni',
    collectMoneyAnimation: 'Disattiva l\'animazione di raccolta dei soldi',
    mobileBattle: 'Correggi la schermata di battaglia su mobile',
    hideRotateDevice: 'Nascondi il promemoria di rotazione del device su mobile',
    salaryTimers: `Timer del salario ${gameConfig.delleragazze} leggibile`,
    moveSkipButton: 'Sposta il bottone salta battaglia in basso',
    poseAspectRatio: `Correggi le proporzioni delle pose ${gameConfig.delleragazze} nelle battaglie`,
    reduceBlur: 'Riduci l\'effetto di profondità di campo sulla schermata principale',
    homeScreenRightSideRearrange: 'Riorganizza gli elementi sul lato destro della schermata principale',
    selectableId: 'Rendi selezionabile l\'ID utente',
    messengerDarkMode: 'Modalità scura per la chat',
    leagueTableCompressed: 'Classifica della lega compatta',
    leagueTableRowStripes: 'Righe della lega con colori alternati',
    removeParticleEffects: 'Rimuove gli effetti particellari della schermata principale',
    eventGirlTicks: `Tick migliorati per ${gameConfig.leragazze} dell'evento`,
    eventGirlBorders: `Bordi verdi intorno ${gameConfig.alleragazze} degli eventi ${Helpers.isGH() ? 'ottenuti' : 'ottenute'}`,
    compactNav: 'Utiliza menù principale compatto',
    poaBorders: 'Bordi verdi intorno ai premi del SdA acquisiti',
    champGirlPower: `Correggi l'overflow della potenza ${gameConfig.delleragazze} nei campioni`,
    champGirlOverlap: `Correggi la sovrapposizione ${gameConfig.dellaragazza} con la selezione ${gameConfig.delleragazze} nei campioni`,
    hideGameLinks: 'Nascondi i link del gioco',
    poaTicks: 'Correggi la posizione dei tick nel SdA',
    poaGirlFade: `Correggi la dissolvenza delle pose ${gameConfig.delleragazze} nel SdA`,
    newButtons: 'Sostituisci i vecchi pulsanti rimanenti',
    bonusFlowersOverflow: `Impedisci ${gameConfig.fiori} bonus di riversarsi nella riga successiva`,
    popButtons: 'Nascondi i pulsanti per l\'assegnazione e la raccolta automatica nei LdP',
    contestNotifs: 'Sposta le notifiche dei contest',
    contestPointsWidth: 'Impedisci l\'overflow dei punti dei contest',
    compactPops: 'LdP compatti',
    monthlyCardText: 'Correggi il testo delle carte mensili',
    povUnclutter: 'Chiarezza della pagina SdV/SdG',
    dailyGoals: 'Restyle degli obiettivi giornalieri',
    bbProgress: 'Barra di avanzamento delle ricompense nella Scopata Boss migliorata',
    compactLossScreen: 'Schermata di sconfitta compatta',
    seasonalEventTweaks: 'Ottimizzazioni per i Mega Eventi',
    compactHaremFilters: 'Filtri dell\'Harem compatti',
    expandedMarketInventory: 'Inventario del mercato allargato',
    compactResourceSummary: 'Riepilogo delle risorse compatto',
    hideClaimAllButton: 'Nascondi il bottone "Richiedi tutto" nella stagione',
    dpEventTweaks: 'Ottimizzazioni per l\'evento Doppia Penetrazione',
    compactDailyMissions: 'Missioni giornaliere compatte',
    removeSlotBorder: 'Rimuovi il bordo bianco nel mercato',
    hideLeagueMultiFight: 'Nascondi il bottone "x15 scontri" nella lega',
}

export const villain = {
    darklord: 'Signore Oscuro',
    ninjaspy: 'Spia Ninja',
    jacksoncrew: 'Ciurma di Jackson',
    pandorawitch: 'Strega Pandora',
    werebunnypolice: 'Polizia del Conigli Mannari',
    fallback: 'Troll mondo {{world}}',
    event: 'Evento',
}

export const market = {
    pointsUnbought: 'Punti statistica necessari per il massimo',
    moneyUnspent: 'Soldi necessari per il massimo',
    moneySpent: 'Soldi spesi al negozio',
    pointsLevel: 'Punti acquisiti da aumento livello',
    pointsBought: 'Punti comprati al negozio',
    pointsEquip: 'Punti statistica da oggetti',
    pointsBooster: 'Punti statistica da potenziamenti',
    pointsClub: 'Punti statistica da bonus del Club',
    boosterItem: 'potenziamenti',
    xpItem: 'libri',
    xpCurrency: 'XP',
    affItem: 'regali',
    affCurrency: 'affetto',
    equips: 'oggetti',
    youOwn: 'Possiedi <b>{{count}}</b> {{type}}.',
    youCanSell: 'Puoi vendere tutto per <b>{{cost}}</b> <span class="hudSC_mix_icn"></span>.',
    youCanGive: 'Puoi dare un massimo di <b>{{value}}</b> {{currency}}.',
}

export const harem = {
    marketRestocked: '> Il <a href="../shop.html">Mercato</a> si è rifornito dalla tua ultima visita.',
    visitMarket: '> Visita prima il <a href="../shop.html">Mercato</a> per vedere qui un riepilogo dell\'inventario',
    haremStats: 'Statistiche dell\'Harem',
    upgrades: 'Miglioramenti',
    levelsAwakening: 'Livelli e Risveglio',
    market: 'Inventario e Mercato',
    wikiPage: 'La pagina wiki di {{name}}}',
    haremLevel: 'Livello dell\'Harem',
    unlockedScenes: 'Scene sbloccate',
    income: 'Guadagno',
    or: '{{left}} o {{right}}',
    toUpgrade: `Per migliorare ${Helpers.isGH() ? 'tutti' : 'tutte'}:`,
    toLevelCap: 'Per salire al livello limite:',
    toLevelMax: 'Per salire al massimo livello ({{max}}):',
    affectionScenes: 'Scene d\'affetto',
    buyable: 'Disponibili nel Mercato:',
    sellable: 'Nell\'inventario:',
    gifts: 'Regali',
    books: 'Libri',
    canBeSold: 'Possono essere venduti per {{sc}}',
    canBeBought: '{{item}} per {{amount}}',
    marketRestock: 'Il Mercato si rifornisce alle {{time}} o al livello {{level}}',
}

export const league = {
    stayInTop: 'Per <em><u>rimanere tra i primi {{top}}</u></em>, devi avere un minimo di <em>{{points}}</em> punti',
    notInTop: 'Per <em><u>essere tra i primi {{top}}</u></em>, devi avere un minimo di <em>{{points}}</em> punti',
    challengesRegen: 'Rigenerazione naturale: <em>{{challenges}}</em>',
    challengesLeft: 'Scontri mancanti: <em>{{challenges}}</em>',
    averageScore: 'Punteggio medio per scontro: <em>{{average}}</em>',
    scoreExpected: 'Punteggio finale previsto: <em>{{score}}</em>',
    toDemote: 'Per <em><u>retrocedere</u></em>, devi essere sorpassato da <em>{{players}}</em> giocatori',
    willDemote: 'Per <em><u>retrocedere</u></em>, puoi avere al massimo <em>{{points}}</em> punti',
    willDemoteZero: 'Per <em><u>retrocedere</u></em>, devi rimanere a <em>0</em> punti',
    toNotDemote: 'Per <em><u>non retrocedere</u></em>, devi avere più di <em>0</em> punti',
    toStay: 'Per <em><u>non essere promosso</u></em>, devi essere sorpassato da <em>{{players}}</em> giocatori',
    willStay: 'Per <em><u>non essere promosso</u></em>, puoi avere al massimo <em>{{points}}</em> punti',
    filterFoughtOpponents: 'Avversari Affrontati',
    filterBoosted: 'Potenziati',
    filterTeamTheme: 'Tema della Squadra',
    currentLeague: 'Lega attuale',
    victories: 'Vittorie',
    defeats: 'Sconfitte',
    unknown: 'Sconosciuti',
    notPlayed: 'Non giocati',
    levelRange: 'Gamma di livelli',
    leagueFinished: 'Lega finita il {{date}}',
    opponents: 'Avversari',
    leaguePoints: 'Punti',
    avg: 'Media',
}

export const simFight = {
    simResults: 'Risultati simulatore',
    guaranteed: 'Garantito',
    impossible: 'Impossibile',
}

export const teamsFilter = {
    searchedName: 'Cerca',
    girlName: `Nome ${gameConfig.dellaragazza}`,
    searchedClass: 'Classe',
    searchedElement: 'Elemento',
    searchedRarity: 'Rarità',
    levelRange: 'Gamma di livelli',
    levelCap: 'Limite di livello',
    levelCap_capped: 'Raggiunto',
    levelCap_uncapped: 'Non raggiunto',
    searchedAffCategory: 'Categoria di affetto',
    searchedAffLevel: 'Livello di affetto',
    grade0: '0 stelle',
    grade1: '1 stella',
    grade2: '2 stelle',
    grade3: '3 stelle',
    grade4: '4 stelle',
    grade5: '5 stelle',
    grade6: '6 stelle',
    searchedBlessedAttributes: 'Benedizioni',
    blessedAttributes: Helpers.isGH() ? 'Ragazzi benedetti' : 'Ragazze benedette',
    nonBlessedAttributes: Helpers.isGH() ? 'Ragazzi non benedetti' : 'Ragazze non benedette',
}

export const champions = {
    participants: 'Partecipanti: {{participants}}/{{members}}',
    clubChampDuration: '{{duration}} dall\'inizio del giro',
}

export const resourceBars = {
    popsIn: 'LdP in {{time}}',
    popsReady: 'LdP pronti',
    readyAt: 'Pronto alle {{time}}',
    endAt: 'Termina alle {{time}}',
    fullAt: 'Piena alle {{time}}',
    xp: 'Prossimo: {{xp}} XP',
}

export const homeScreen = {
    clubChamp: 'Campione del Club',
    completeIn: 'Completa in ',
    newMissionsIn: 'Nuova Missione in ',
    missionsReady: 'Missioni pronte',
}

export const seasonStats = {
    fights: 'Scontri',
    victories: 'Vittorie',
    defeats: 'Sconfitte',
    mojoWon: 'Mojo vinti',
    mojoLost: 'Mojo persi',
    mojoWonAvg: 'Media mojo vinti',
    mojoLostAvg: 'Media mojo persi',
    mojoAvg: 'Media mojo globale',
}

export const pachinkoNames = {
    availableGirls: `${Helpers.isGH() ? 'Ragazzi' : 'Ragazze'} disponibili: `,
    poolGirls: 'Selezione corrente: ',
}

export const contestSummary = {
    totalRewards: 'Ricompense totali salvate ({{contests}} contest):',
    contestsWarning: 'I contest scadono dopo 21 giorni!',
}

export const villainBreadcrumbs = {
    town: 'Città',
    adventure: 'Avventura',
    begincity: 'Città dell\'inizio',
    gemskingdom: 'Il reame delle gemme',
    ninjavillage: 'Villaggio dei ninja',
    invadedkingdom: 'Il regno invaso',
    juysea: 'Il mare Juy',
    admittance: 'Ammissione del defunto',
    magicforest: 'La foresta magica',
    hamelintown: 'Città di Hamelin',
    plainofrituals: 'Piano dei rituali',
    heroesuniversity: 'Università degli Eroi',
    ninjasacredlands: 'Terre Sacre dei Ninja',
    splatters: 'Arcipelago Appiccicoso',
    digisekai: 'Digisekai',
    stairway: 'Scalinata verso il Cielo',
    training: 'Dimensione d\'Allenamento',
    weresquidisland: 'Isola dei Calamari Mannari',
    haremtournament: 'Il Torneo dell\'Harem',
}

export const blessingSpreadsheetLink = {
    name: `Apri il foglio di calcolo delle benedizioni di ${Helpers.isGH() ? 'Bella' : 'zoopokemon'}`
}

export const haremTeamsFilter = {
    team: 'Squadra',
    visitTeams: 'Visita le <a href="../teams.html">Squadre</a> prima.'
}

export const leaderboardClubmateIndicators = {
    clubmate: 'Membro del club',
}

export const improvedWaifu = {
    editPose: 'Modifica posa',
    resetPose: 'Ripristina posa',
    savePose: 'Salva posa',
    favGirl: `Aggiungi ${Helpers.isGH() ? 'ragazzo' : 'ragazza'} ai preferiti`,
    unfavGirl: `Rimuovi ${Helpers.isGH() ? 'ragazzo' : 'ragazza'} dai preferiti`,
    modeAll: `Modalità: Tutt${Helpers.isGH() ? 'i i ragazzi' : 'e le ragazze'}`,
    modeFav: `Modalità: ${Helpers.isGH() ? 'Ragazzi preferiti' : 'Ragazze preferite'}`,
    randomWaifu: `${Helpers.isGH() ? 'Fidanzato' : 'Waifu'} casuale`,
    cycleWaifu: `Avvia rotazione ${Helpers.isGH() ? 'Fidanzati' : 'Waifu'}`,
    cyclePause: 'Ferma rotazione',
}
