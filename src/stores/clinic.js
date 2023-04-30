import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase.js'
import { collection, addDoc, FieldValue } from 'firebase/firestore'

export type TypeClinic = {
  clinicName: String;
  doctorName: String;
  create: FieldValue;
}

export const useClinicStore = defineStore('clinic', {  
  state: () => ({
    clinics: [] as (TypeClinic)[] 
  }),
  
  getters: {
    count: (state) => { return state.clinics.length }
  },

  actions: {
    async addClinic(){
      const DocuRef = addDoc(collection(db, "clinics")), {
        // clinicName: "",

      }
    }
  }
  
  // const DocuRef = addDoc(collection(db, "clinics"), {
  //   test: "han"
  // })
  // console.log('doc id: ', DocuRef.id)  
  
  // }
)

