<template>
  <PageTemplate
    title="Politique de Confidentialité"
    title-style="handwritten"
    subtitle="L'Alternative"
    subtitle-style="handwritten"
    :show-c-t-a="false"
    :show-back-button="true"
    back-text="Page d'accueil"
    back-link="/"
  >
    <!-- Date de mise à jour -->
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-8">
      <strong>Dernière mise à jour :</strong> 31 décembre 2025
    </p>

    <!-- Introduction -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Introduction</h2>
    <p>
      L'Alternative s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application mobile.
    </p>

    <!-- Informations que nous collectons -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Informations que nous collectons</h2>

    <h3 class="text-xl font-semibold mt-6 mb-3">Informations personnelles que vous fournissez</h3>
    <ul class="list-disc list-inside space-y-2 ml-4">
      <li><strong>Données d'humeur :</strong> Entrées et évaluations d'humeur quotidiennes</li>
      <li><strong>Données de fatigue :</strong> Entrées de niveau d'énergie</li>
      <li><strong>Informations de compte :</strong> Adresse e-mail (si vous choisissez de créer un compte)</li>
    </ul>

    <h3 class="text-xl font-semibold mt-6 mb-3">Informations collectées automatiquement</h3>
    <ul class="list-disc list-inside space-y-2 ml-4">
      <li><strong>Informations sur l'appareil :</strong> Type d'appareil, système d'exploitation, version de l'application</li>
      <li><strong>Données d'utilisation :</strong> Fonctionnalités utilisées, durée de session, interactions avec l'application</li>
      <li><strong>Jetons de notification push :</strong> Jetons FCM pour l'envoi de notifications</li>
      <li><strong>Données analytiques :</strong> Statistiques d'utilisation anonymes via Firebase Analytics</li>
    </ul>

    <!-- Comment nous utilisons vos informations -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Comment nous utilisons vos informations</h2>
    <p>Nous utilisons les informations collectées pour :</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mt-3">
      <li>Fournir et maintenir les fonctionnalités de l'application</li>
      <li>Suivre votre historique d'humeur et générer des aperçus</li>
      <li>Vous envoyer des notifications push (évaluations des activités, rappels)</li>
      <li>Améliorer et personnaliser votre expérience</li>
      <li>Analyser l'utilisation de l'application pour améliorer les fonctionnalités</li>
      <li>Répondre à vos demandes et fournir un support client</li>
    </ul>

    <!-- Stockage et sécurité des données -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Stockage et sécurité des données</h2>
    <ul class="list-disc list-inside space-y-2 ml-4">
      <li>Toutes les données sont stockées de manière sécurisée en utilisant les services Firebase (Google Cloud Platform)</li>
      <li>Les données d'humeur sont stockées en local sur votre appareil</li>
      <li>L'authentification des utilisateurs est gérée par Firebase Authentication</li>
      <li>Nous mettons en œuvre des mesures de sécurité conformes aux normes de l'industrie pour protéger vos données</li>
      <li>La transmission des données est cryptée via HTTPS/TLS</li>
    </ul>

    <!-- Services tiers -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Services tiers</h2>
    <p>Nous utilisons les services tiers suivants qui peuvent collecter des informations :</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mt-3">
      <li>
        <strong>Firebase (Google) :</strong> Authentification, base de données, analytiques, messagerie<br>
        <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" class="text-[#F4A694] hover:underline">
          Politique de confidentialité Firebase
        </a>
      </li>
      <li><strong>Cloud Firestore :</strong> Stockage de données</li>
      <li><strong>Firebase Cloud Messaging :</strong> Notifications push</li>
    </ul>

    <!-- Vos droits et choix -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Vos droits et choix</h2>
    <p>Vous avez le droit de :</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mt-3">
      <li><strong>Accès :</strong> Demander une copie de vos données</li>
      <li><strong>Suppression :</strong> Demander la suppression de votre compte et de toutes les données associées</li>
      <li><strong>Modification :</strong> Mettre à jour vos informations de profil à tout moment</li>
      <li><strong>Désactivation :</strong> Désactiver les notifications push dans les paramètres de l'application</li>
      <li><strong>Export :</strong> Demander l'exportation de vos données d'humeur</li>
    </ul>

    <h3 class="text-xl font-semibold mt-6 mb-3">Comment exercer vos droits</h3>
    <p>
      Pour exercer l'un de ces droits, contactez-nous à :
      <a href="mailto:victor.delamonica@icloud.com" class="text-[#F4A694] hover:underline">victor.delamonica@icloud.com</a>
    </p>

    <h3 class="text-xl font-semibold mt-6 mb-3">Suppression de compte</h3>
    <p>Vous pouvez supprimer votre compte et toutes les données associées via :</p>
    <ol class="list-decimal list-inside space-y-2 ml-4 mt-3">
      <li>Paramètres de l'application → Profil → Supprimer le compte</li>
      <li>
        Ou en nous contactant à :
        <a href="mailto:victor.delamonica@icloud.com" class="text-[#F4A694] hover:underline">victor.delamonica@icloud.com</a>
      </li>
    </ol>
    <p class="mt-3">
      Après suppression, toutes vos données seront définitivement supprimées dans les 30 jours.
    </p>

    <!-- Conservation des données -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Conservation des données</h2>
    <ul class="list-disc list-inside space-y-2 ml-4">
      <li><strong>Comptes actifs :</strong> Données conservées pendant que le compte est actif</li>
      <li><strong>Comptes supprimés :</strong> Données définitivement supprimées dans les 30 jours</li>
      <li><strong>Données analytiques :</strong> Les données anonymisées peuvent être conservées jusqu'à 14 mois</li>
    </ul>

    <!-- Confidentialité des enfants -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Confidentialité des enfants</h2>
    <p>
      L'Alternative n'est pas destinée aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations auprès d'enfants de moins de 13 ans. Si vous pensez que nous avons collecté des informations auprès d'un enfant de moins de 13 ans, veuillez nous contacter immédiatement.
    </p>

    <!-- Notifications push -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Notifications push</h2>
    <p>Nous utilisons Firebase Cloud Messaging pour envoyer :</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mt-3">
      <li>Évaluations des activités</li>
      <li>Mises à jour de fonctionnalités</li>
    </ul>
    <p class="mt-3">
      Vous pouvez désactiver les notifications à tout moment dans les paramètres de votre appareil ou de l'application.
    </p>

    <!-- Modifications de cette Politique de Confidentialité -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Modifications de cette Politique de Confidentialité</h2>
    <p>Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Nous vous informerons de tout changement en :</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mt-3">
      <li>Publiant la nouvelle Politique de Confidentialité dans l'application</li>
      <li>Mettant à jour la date « Dernière mise à jour »</li>
      <li>(Pour les changements significatifs) Vous envoyant une notification push</li>
    </ul>

    <!-- Nous contacter -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Nous contacter</h2>
    <p>Si vous avez des questions concernant cette Politique de Confidentialité ou nos pratiques, contactez-nous :</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mt-3">
      <li>
        <strong>Email : </strong>
        <a href="mailto:clarisse.hikoum@gmail.com" class="text-[#F4A694] hover:underline">clarisse.hikoum@gmail.com</a> ou
        <a href="mailto:victor.delamonica@icloud.com" class="text-[#F4A694] hover:underline">victor.delamonica@icloud.com</a>
      </li>
      <li>
        <strong>Site web : </strong>
        <a href="https://inclusens.org" target="_blank" rel="noopener noreferrer" class="text-[#F4A694] hover:underline">inclusens.org</a>
      </li>
    </ul>

    <!-- Conformité légale -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Conformité légale</h2>
    <p>Cette application est conforme à :</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mt-3">
      <li>Règlement Général sur la Protection des Données (RGPD) - UE</li>
      <li>California Consumer Privacy Act (CCPA) - USA</li>
      <li>Exigences de sécurité des données du Google Play Store</li>
      <li>Exigences de confidentialité de l'Apple App Store</li>
    </ul>

    <!-- Base juridique du traitement des données -->
    <h2 class="text-2xl font-bold mt-8 mb-4">Base juridique du traitement des données (RGPD)</h2>
    <p>Nous traitons vos données sur la base de :</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mt-3">
      <li><strong>Consentement :</strong> Pour les fonctionnalités optionnelles comme les notifications push</li>
      <li><strong>Contrat :</strong> Pour fournir le service de suivi d'humeur</li>
      <li><strong>Intérêt légitime :</strong> Pour améliorer l'application et prévenir les abus</li>
    </ul>

  </PageTemplate>
</template>

<script setup>
// Page metadata for SEO
useHead({
  title: 'Politique de Confidentialité - L\'Alternative - IncluSens',
  meta: [
    {
      name: 'description',
      content: 'Politique de Confidentialité de L\'Alternative. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles dans le respect du RGPD et des normes de confidentialité.'
    },
    {
      name: 'keywords',
      content: 'politique de confidentialité, RGPD, protection des données, vie privée, L\'Alternative, IncluSens'
    }
  ]
})

// Use the default layout
definePageMeta({ layout: 'default' })
</script>

<style scoped>
/* Additional spacing for lists */
ul, ol {
  @apply my-4;
}

/* Style for headings */
h2 {
  @apply scroll-mt-20;
}

h3 {
  @apply scroll-mt-20;
}

/* Links styling */
a {
  @apply transition-colors duration-200;
}
</style>

