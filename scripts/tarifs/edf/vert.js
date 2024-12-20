abonnements.push(
    {
        name: "EDF - Vert Electrique",
        offer_type: "Marché",
        lastUpdate: "2024-11-01",
        isCommunity: false,
        subscription_url: "https://particulier.edf.fr/fr/accueil/electricite-gaz/offres-electricite/offres-marche/electricite-verte/vert-electrique.html",
        price_url: "https://particulier.edf.fr/content/dam/2-Actifs/Documents/Offres/grille-prix-vert-electrique.pdf",
        prices: [{
            puissance: 3,
            abonnement: 9.69,
            bleu: {
                prixKwhHC: 24.23
            }
        },
        {
            puissance: 6,
            abonnement: 12.68,
            bleu: {
                prixKwhHC: 24.23
            }
        },
        {
            puissance: 9,
            abonnement: 15.89,
            bleu: {
                prixKwhHC: 24.23
            }
        },
        {
            puissance: 12,
            abonnement: 19.16,
            bleu: {
                prixKwhHC: 24.23
            }
        },
        {
            puissance: 15,
            abonnement: 22.21,
            bleu: {
                prixKwhHC: 24.23
            }
        },
        {
            puissance: 18,
            abonnement: 25.24,
            bleu: {
                prixKwhHC: 24.23
            }
        },
        {
            puissance: 24,
            abonnement: 31.96,
            bleu: {
                prixKwhHC: 24.23
            }
        },
        {
            puissance: 30,
            abonnement: 37.68,
            bleu: {
                prixKwhHC: 24.23
            }
        },
        {
            puissance: 36,
            abonnement: 44.43,
            bleu: {
                prixKwhHC: 24.23
            }
        }],
        hc: [{
            start: { hour: 0, minute: 0 },
            end: { hour: 24, minute: 0 }
        }],
        hasHCCustom: false,
        hasSpecialDaysCustom: false,
        specialDays: [],
        getDayType: function (day) {
            let dayType = "bleu";
            return dayType;
        }
    }
);

