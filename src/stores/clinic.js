import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase.js'
import { collection, addDoc, FieldValue } from 'firebase/firestore'

export const useClinicStore = defineStore('clinic', {  
  state: () => {
    return {
      clinics: [],
      clinic: {}  
    }    
  },
  
  getters: {
    count: (state) => { return state.clinics.length }
  },

  actions: {
    init(){
      const docuRef = collection(db, "clinics")
    },
    async addClinic(){
      const DocuRef = addDoc(this.docuRef, {
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

