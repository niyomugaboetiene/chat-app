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
        NoGroupsYet: 'Nta tsinda rihari',
        Createdby: 'Yahanzwe na',
        ChangeGroupName: 'Hinduara Izina',
        ChangeGroupPhoto: 'Hindura Ifoto',
        DeleteGroup: 'Siba Itsinda',
        ViewMembers: 'Reba Abanyamuryango',
        WelcomeToChat: 'Urakaza neza ku Ruganiriro',
        Select: 'Hitamo inshuti cyangwa itsinda kugirango utangire kuganira',
        NewGroupName: 'Izina Rishya',
        Cancel: 'Kureka',
        Updating: 'Guhindura....',
        Update: 'Hindura',
        EnterNewName: 'Andika izina rishya',
        ChangeGroupPhoto: 'Hindura Ifoto',
        SelectNewGroupPhoto: 'Hitamo ifoto nshyashya',
        BackToChat: 'Back to Chat'
        AddMember: 'Add Member'
        SelectUsersToAdd: 'Select users to Add'
        NoAvailableUsersToAdd: 'No available users to add'
        Add: 'Add'
        GroupMembers: 'Group Members'
        NoMembers: ''
        Admin
        Remove
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
        NoGroupsYet: 'No groups yet',
        Createdby: 'Created By',
        ChangeGroupName: 'Change Group Name',
        ChangeGroupPhoto: 'Change Group Photo',
        DeleteGroup: 'Delete Group',
        ViewMembers: 'View Members',
        WelcomeToChat: 'Welcome to Chat',
        Select: 'Select a contact or group to start messaging',
        NewGroupName: 'New Group Name',
        Cancel: 'Cancel',
        Updating: 'Updaing....',
        Update: 'Update',
        EnterNewName: 'Enter new name',
        ChangeGroupPhoto: 'Change Group Photo',
        SelectNewGroupPhoto: 'Select New Group Photo'
      }
    }
  }
});

export default i18n;
