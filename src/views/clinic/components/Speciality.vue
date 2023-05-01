<template>
  <div class="p-3 bg-white card multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <h5 class="font-weight-bolder">Speciality</h5>
    <div class="mt-3 multisteps-form__content">
      <div class="row">
        <div class="col-3">
          <label>Title</label>
          <input class="multisteps-form__input form-control" type="text" placeholder="호흡기 진료"
            v-model="clinicStore.title" />
        </div>
        <div class="col-4">
          <label>Speciality</label>
          <select id="choices-field" class="form-control" name="choices-sizes" v-model="clinicStore.speciality">
            <option value="천식" selected="">천식</option>
            <option value="알러지">알러지</option>
            <option value="초음파">초음파검사</option>
            <option value="갑상선">갑상선</option>
            <option value="수액치료">수액치료</option>
            <option value="처방전">처방전</option>
          </select>
        </div>
        <div class="col-5">
          <label>대표전화번호</label>
          <input class="multisteps-form__input form-control" type="text" placeholder="031-657-8279"
            v-model="clinicStore.phone" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label class="mt-4 form-label">Tags</label>
          <select id="choices-tags" class="form-control" name="choices-tags" multiple v-model="clinicStore.tags">
            <option value="토요일 휴무" selected>토요일 휴무</option>
            <option value="일요일 휴무">일요일 휴무</option>
            <option value="공휴일 휴무">공휴일 휴무</option>
            <option value="연중 365일 진료">연중 365일 진료</option>
          </select>
        </div>
      </div>
      <div class="mt-4 button-row d-flex col-12">
        <vsud-button type="button" color="secondary" variant="gradient" class="mb-0 js-btn-prev" title="Prev"
          @click="$parent.prevStep">Prev</vsud-button>
        <vsud-button type="button" color="dark" variant="gradient" class="mb-0 ms-auto js-btn-next" title="Next"
          @click="clinicStore.addClinic">Next</vsud-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Choices from "choices.js";
import VsudButton from "@/components/VsudButton.vue";
import { onMounted } from "vue";
import { useClinicStore } from "../../../stores/clinic";
const clinicStore = useClinicStore()

onMounted(() => {
  if (document.getElementById("choices-field")) {
    let element = document.getElementById("choices-field");
    new Choices(element, {
      searchEnabled: false,
      allowHTML: true
    });
  }

  if (document.getElementById("choices-tags")) {
    var tags = document.getElementById("choices-tags");
    const examples = new Choices(tags, {
      removeItemButton: true,
      allowHTML: true
    });

    examples.setChoices(
      [
        {
          value: "One",
          label: "Expired",
          disabled: true,
        },
        {
          value: "Two",
          label: "수요일 휴무",
          selected: true,
        },
      ],
      "value",
      "label",
      false,
    );
  }
},
)

</script>
