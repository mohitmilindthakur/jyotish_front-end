export const ayanamshaToNumberMap = {
    FAGAN_BRADLEY: 0,
    LAHIRI: 1,
    DELUCE: 2,
    RAMAN: 3,
    USHASHASHI: 4,
    KRISHNAMURTI: 5,
    DJWHAL_KHUL: 6,
    YUKTESHWAR: 7,
    JN_BHASIN: 8,
    BABYL_KUGLER1: 9,
    BABYL_KUGLER2: 10,
    BABYL_KUGLER3: 11,
    BABYL_HUBER: 12,
    BABYL_ETPSC: 13,
    ALDEBARAN_15_TAU: 14,
    HIPPARCHOS: 15,
    SASSANIAN: 16,
    GALCENT_0_SAG: 17,
    J2000: 18,
    J1900: 19,
    B1950: 20,
    SURYASIDDHANTA: 21,
    SURYASIDDHANTA_MSUN: 22,
    ARYABHATA: 23,
    ARYABHATA_MSUN: 24,
    SS_REVATI: 25,
    SS_CHITRA: 26,
    TRUE_REVATI: 28,
    TRUE_PUSHYA: 29,
    GALCENT_RGBRAND: 30,
    GALEQU_IAY1958: 31,
    GALEQU_TRUE: 32,
    GALEQU_MULA: 33,
    GALALIGN_MARDYKS: 34,
    TRUE_MULA: 35,
    GALCENT_MULA_WILHELM: 36,
    ARAYABHATA_522: 37,
    BABYL_BRITTON: 38,
    TRUE_SHEORAN: 39,
    GALCENT_COCHRANE: 40,
    GALEQU_FIORENZA: 41,
    VALENS_MOON: 42
}

export const NumberToAyanamshaMap = {};

for (let k in ayanamshaToNumberMap) {
    let key = ayanamshaToNumberMap[k]
    NumberToAyanamshaMap[key] = k
}

export default ayanamshaToNumberMap