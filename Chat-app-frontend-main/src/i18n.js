import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",         
  fallbackLng: "rw", 

  resources: {
    rw: {
      translation: {
        create_group: "Hanga Itsinda",
        send: "Ohereza",
        online: "Ku Murongo",
        offline: "Ntago ari kumurongo",
        groups: "Amatsinda",
        language: "Ururimi",
        contact: 'Inshuti',
        leaveGroup: 'Va mwitsinda',
        NoGroupsYet: 'Nta tsinda rihari'
      }
    },
    en: {
      translation: {
        create_group: "Create Group",
        send: "Send",
        online: "Online",
        offline: "Offline",
        groups: "Groups",
        language: "Language",
        contact: 'Contacts',
        leaveGroup: 'Leave Group',
        NoGroupsYet: 'No groups yet'
      }
    }
  }
});

export default i18n;
