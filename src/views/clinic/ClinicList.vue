<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
          <div class="pb-0 card-header">
            <div class="d-lg-flex">
              <div>
                <h5 class="mb-0">All Clinics</h5>
                <p class="mb-0 text-sm">
                  고객이 좀더 가깝게 접근할 수 있는 의원리스트입니다.
                </p>
              </div>
              <div class="my-auto mt-4 ms-auto mt-lg-0">
                <div class="my-auto ms-auto">
                  <router-link to="newclinic"><a class="mb-0 btn bg-gradient-success btn-sm" target="_blank">+&nbsp; New
                      Clinic</a>
                  </router-link>
                  <button type="button" class="mx-1 mb-0 btn btn-outline-success btn-sm" data-bs-toggle="modal"
                    data-bs-target="#import">
                    Import
                  </button>
                  <div id="import" class="modal fade" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog mt-lg-10">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 id="ModalLabel" class="modal-title">
                            Import CSV
                          </h5>
                          <i class="fas fa-upload ms-3"></i>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <p>You can browse your computer for a file.</p>
                          <input type="text" placeholder="Browse file..." class="mb-3 form-control" />
                          <div class="form-check">
                            <input id="importCheck" class="form-check-input" type="checkbox" value="" checked="" />
                            <label class="custom-control-label" for="importCheck">I accept the terms and
                              conditions</label>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn bg-gradient-secondary btn-sm" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="button" class="btn bg-gradient-success btn-sm">
                            Upload
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="mt-1 mb-0 btn btn-outline-success btn-sm export mt-sm-0" data-type="csv" type="button"
                    name="button">
                    Export
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="px-0 pb-0 card-body">
            <div class="table-responsive">
              <DataTable :data="clinics" :columns="columns"  :options="options" class="display">
                <thead class="thead-light">
                  <tr>
                    <th>클리닉</th>
                    <th>소개</th>
                    <th>원장</th>
                    <th>전화번호</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>클리닉</th>
                    <th>소개</th>
                    <th>원장</th>
                    <th>전화번호</th>
                  </tr>
                </tfoot>
              </DataTable>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-bs5'
import languageKO from 'datatables.net-plugins/i18n/ko.json'
import 'datatables.net-responsive'
import 'datatables.net-select'
// import setTooltip from "@/assets/js/tooltip.js";
import { onMounted, ref, reactive } from "vue";
import { db } from '@/firebase'
import { query, onSnapshot, collection, orderBy } from "firebase/firestore";

DataTable.use(DataTablesCore)
const options = {
  responsive: true,
  select: true,
  language: languageKO
}
const columns = [
  { data: 'clinicName'},
  { data: 'description'},
  { data: 'doctorName'},
  { data: 'phone'},
]


//firestore setting
const colRef = collection(db, "clinics")
const q = query(colRef, orderBy('createdAt', 'asc'))
const clinics = reactive([])
// console.log(clinics)

const unsub = onSnapshot(q, (snap) => {
  snap.docChanges().forEach((change) => {
    let changedata = change.doc.data()
    changedata.id = change.doc.id
    if (change.type === "added") {
      clinics.unshift(changedata)
      console.log(`id: ${changedata.id} added.`)  
    }
    if (change.type === "modified") {
      let index = clinics.findIndex(listRef => listRef.id === changedata.id)
      Object.assign(clinics[index], changedata)
      console.log(`id: ${changedata.id} modified.`)
    }
    if (change.type === "removed") {
      let index = clinics.findIndex(listRef => listRef.id === changedata.id)
      clinics.splice(index, 1)
      console.log(`id: ${changedata.id} modified.`)
    }

  })
},
  (err) => { console.log(err) }
)





/* onMounted(() => {
    if (document.getElementById("clinic-list")) {
      const dataTableSearch = new DataTable("#clinic-list", { searchable: true, fixedHeight: false, perPage: 7})

      document.querySelectorAll(".export").forEach(function (el) {
        el.addEventListener("click", function () {
          var type = el.dataset.type
          var data = { type: type,  filename: "soft-ui-" + type }

          if (type === "csv") { data.columnDelimiter = "|"  }
          dataTableSearch.export(data);
        })
      })
    }
    setTooltip()
  }) */
</script>
<style>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>
