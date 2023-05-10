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
              <table id="clinic-table" class="table table-flush">
                <!--                 <thead class="thead-light">
                  <tr>
                    <th>clinicName</th>
                    <th>category</th>
                    <th>doctorName</th>
                    <th>phone</th>
                    <th>title</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead> -->
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DataTable } from "simple-datatables";
// import setTooltip from "@/assets/js/tooltip.js";
import { onMounted, ref, reactive } from "vue";
import { db } from '@/firebase'
import { query, onSnapshot, collection, orderBy } from "firebase/firestore";

//firestore setting
const colRef = collection(db, "clinics")
const q = query(colRef, orderBy('createdAt', 'asc'))
const clinics = reactive([])
console.log(clinics)

const unsub = onSnapshot(q, (snap) => {
  snap.docChanges().forEach((change) => {
    let changedata = change.doc.data()
    changedata.id = change.doc.id
    //datatable temporary constant
    let objt = { data: [] }

    if (change.type === "added") {
      clinics.unshift(changedata)
      console.log(`id: ${changedata.id} added.`)
      console.log(`clinics length is ${clinics.length}`)

      //add data to datatables
      if (clinics) {
        if (!objt.headings) {
          objt.headings = Object.keys(clinics[0])
        }
        console.log(objt.headings)
      }
      let i = clinics.length - 1
      if (clinics[i]) {
        objt.data[i] = Object.values(clinics[i])
      }


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
    //simple datatable 

    /*     for (let i = 0; i < clinics.length; i++) {
          objt.data[i] = [];
          for (let p in clinics[i]) {
            if (clinics[i].hasOwnProperty(p)) {
              objt.data[i].push(clinics[i][p])
            }
          }
        } */
    const datatable = new DataTable("#clinic-table", {
      searchable: true,
      fixedHeight: true,
      data: objt,
    })
  })
},
  (err) => { console.log(err) }
)
console.log('firestore connected')


/* onMounted(() => {

  //simple datatable 
  let obj = {
    headings: Object.keys(clinics[0] || {}),
    data: []
  }
  console.log(`obj(before) headings is ${obj.headings} `)

  for (let i = 0; i < clinics.length; i++) {
    obj.data[i] = [];
    for (let p in clinics[i]) {
      if (clinics[i].hasOwnProperty(p)) {
        obj.data[i].push(clinics[i][p])
      }
    }
  }
  console.log(`obj(after) is ${obj.data.data}`)
  console.log(`clinics length is ${clinics.length}`)

  const datatable = new DataTable("#clinic-table", {
    searchable: true,
    fixedHeight: true,
    data: obj,
  })
  console.log(`datatable mounted`)
  console.log(`clinics length is ${clinics.length}`)
}) */


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
