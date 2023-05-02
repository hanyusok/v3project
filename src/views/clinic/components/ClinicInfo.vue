<template>
  <div class="p-3 bg-white card multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <h5 class="font-weight-bolder">Clinic Information</h5>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="col-12 col-sm-6">
          <label>Name</label>
          <input class="multisteps-form__input form-control" type="text" placeholder="eg. 마트의원"
            v-model="clinicStore.clinicName" />
        </div>
        <div class="mt-3 col-12 col-sm-6 mt-sm-0">
          <label>Doctor</label>
          <input class="multisteps-form__input form-control" type="text" placeholder="eg. 홍길동원장"
            v-model="clinicStore.doctorName" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <label class="mt-4">Description</label>
          <p class="text-xs form-text text-muted ms-1 d-inline">(optional)</p>
          <textarea type="text" rows="5" placeholder="간단한 병원소개" class="form-control h-50"
            v-model="clinicStore.description" />
        </div>
        <div class="mt-4 col-sm-6 mt-sm-0">
          <label class="mt-4">Category</label>
          <select id="choices-category" class="form-control" name="choices-category" v-model="clinicStore.category">
            <option value="가정의학과" selected="">가정의학과</option>
            <option value="내과">내과</option>
            <option value="소아과">소아과</option>
            <option value="이비인후과">이비인후과</option>
            <option value="기타">기타</option>
          </select>
          <label>Field</label>
          <select id="choices-sizes" class="form-control" name="choices-sizes" v-model="clinicStore.field">
            <option value="건강보험 대상" selected="">건강보험 대상</option>
            <option value="비급여 진료">비급여 진료</option>
            <option value="피부 비만 레이저 시술">피부 비만 레이저 시술</option>
            <option value="수액치료">수액치료</option>
            <option value="기타">기타</option>
          </select>
        </div>
      </div>
      <div class="mt-4 button-row d-flex col-12">
        <vsud-button type="button" color="dark" variant="gradient" class="mb-0 ms-auto js-btn-next" title="Next"
          @click="$parent.nextStep">Next</vsud-button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import Quill from "quill";
import Choices from "choices.js";
import VsudButton from "@/components/VsudButton.vue";
import { onMounted } from "vue";
import { useClinicStore } from "../../../stores/clinic";

const clinicStore = useClinicStore()

onMounted(() => {
  if (document.getElementById("choices-category")) {
    var element = document.getElementById("choices-category");
    new Choices(element, {
      searchEnabled: false,
      allowHTML: true
    })
  }

  if (document.getElementById("choices-sizes")) {
    let element = document.getElementById("choices-sizes");
    new Choices(element, {
      searchEnabled: false,
      allowHTML: true
    })
  }
})

</script>
