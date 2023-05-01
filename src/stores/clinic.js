import { defineStore } from 'pinia'
import { db } from '@/firebase.js'
import { collection, addDoc } from 'firebase/firestore'
import router from '@/router/index'

export const useClinicStore = defineStore('clinic', {  
  state: () => ({    
      clinics: [],
      clinicId: "",
      userId: "",
      clinicName: "",
      doctorName: "",
      description: "",
      category: "",
      clinicImg: "",
      kakaoAct: "",
      facebookAct: "",
      instaAct: "",      
      field: "",
      phone: "",
      title: "",
      speciality: "",
      tags: [],
      createdAt: "",
      updatedAt: ""        
  }),
  
  getters: {
    count: (state) => { return state.clinics.length }
  },

  actions: {    
    async addClinic(){
      const colRef = collection(db, "clinics")
      const docu = await addDoc(colRef, {                
        userId: "",
        clinicName: this.clinicName,
        doctorName: this.doctorName,
        description: this.description,
        category: this.category,
        clinicImg: this.clinicImg,
        kakaoAct: this.kakaoAct,
        facebookAct: this.facebookAct,
        instaAct: this.instaAct,        
        field: this.field,
        phone: this.phone,
        title: this.title,
        speciality: this.speciality,
        tags: this.tags,
        createdAt: Date.now(),
        updatedAt: "" 
      })
      let respId = docu.id
      console.log(`document id: ${respId} added.`)
      router.push('cliniclist')      
    },

    getClinic(){},
    editClinic(){},
    deleteClinic(){},
    resetClinic(){}
  }
})

