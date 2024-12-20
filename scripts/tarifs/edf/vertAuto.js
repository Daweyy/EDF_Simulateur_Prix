abonnements.push({
    name: "EDF - Vert Electrique Auto",
    offer_type: "Marché",
    lastUpdate: "2024-11-01",
    isCommunity: false,
    subscription_url: "https://particulier.edf.fr/fr/accueil/electricite-gaz/offres-electricite/offres-marche/electricite-verte/vert-electrique-auto.html",
    price_url: "https://particulier.edf.fr/content/dam/2-Actifs/Documents/Offres/grille-prix-vert-electrique-auto.pdf",
    prices: [
        {
            puissance: 6,
            abonnement: 13.28,
            bleu: {
                prixKwhHP: 29.53,
                prixKwhHC: 16.03
            }
        },
        {
            puissance: 9,
            abonnement: 16.82,
            bleu: {
                prixKwhHP: 29.53,
                prixKwhHC: 16.03
            }
        },
        {
            puissance: 12,
            abonnement: 20.28,
            bleu: {
                prixKwhHP: 29.53,
                prixKwhHC: 16.03
            }
        },
        {
            puissance: 15,
            abonnement: 23.57,
            bleu: {
                prixKwhHP: 29.53,
                prixKwhHC: 16.03
            }
        },
        {
            puissance: 18,
            abonnement: 26.84,
            bleu: {
                prixKwhHP: 29.53,
                prixKwhHC: 16.03
            }
        },
        {
            puissance: 24,
            abonnement: 33.70,
            bleu: {
                prixKwhHP: 29.53,
                prixKwhHC: 16.03
            }
        },
        {
            puissance: 30,
            abonnement: 39.94,
            bleu: {
                prixKwhHP: 29.53,
                prixKwhHC: 16.03
            }
        },
        {
            puissance: 36,
            abonnement: 45.08,
            bleu: {
                prixKwhHP: 29.53,
                prixKwhHC: 16.03
            }
        }],
    hc: [],
    hasHCCustom: true,
    hasSpecialDaysCustom: false,
    specialDays: [],
    getDayType: function (day) {
        let dayType = "bleu";
        return dayType;
    }
});