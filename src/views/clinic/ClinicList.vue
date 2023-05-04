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
              <!-- <table id="clinic-list" class="table table-flush">
                <thead class="thead-light">
                  <tr>
                    <th>Clinic Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck1" class="form-check-input" type="checkbox" checked />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/adidas-hoodie.jpg"
                          alt="hoodie" />
                        <h6 class="my-auto ms-3">BKLGO Full Zip Hoodie</h6>
                      </div>
                    </td>
                    <td class="text-sm">Clothing</td>
                    <td class="text-sm">$1,321</td>
                    <td class="text-sm">243598234</td>
                    <td class="text-sm">0</td>
                    <td>
                      <span class="badge badge-danger badge-sm">Out of Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck2" class="form-check-input" type="checkbox" checked />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/macbook-pro.jpg"
                          alt="mac" />
                        <h6 class="my-auto ms-3">MacBook Pro</h6>
                      </div>
                    </td>
                    <td class="text-sm">Electronics</td>
                    <td class="text-sm">$1,869</td>
                    <td class="text-sm">877712</td>
                    <td class="text-sm">0</td>
                    <td>
                      <span class="badge badge-danger badge-sm">Out of Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck3" class="form-check-input" type="checkbox" />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/metro-chair.jpg"
                          alt="metro-chair" />
                        <h6 class="my-auto ms-3">Metro Bar Stool</h6>
                      </div>
                    </td>
                    <td class="text-sm">Furniture</td>
                    <td class="text-sm">$99</td>
                    <td class="text-sm">0134729</td>
                    <td class="text-sm">978</td>
                    <td>
                      <span class="badge badge-success badge-sm">in Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck10" class="form-check-input" type="checkbox" />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/alchimia-chair.jpg"
                          alt="alchimia" />
                        <h6 class="my-auto ms-3">Alchimia Chair</h6>
                      </div>
                    </td>
                    <td class="text-sm">Furniture</td>
                    <td class="text-sm">$2,999</td>
                    <td class="text-sm">113213</td>
                    <td class="text-sm">0</td>
                    <td>
                      <span class="badge badge-danger badge-sm">Out of Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck5" class="form-check-input" type="checkbox" />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/fendi-coat.jpg"
                          alt="fendi" />
                        <h6 class="my-auto ms-3">Fendi Gradient Coat</h6>
                      </div>
                    </td>
                    <td class="text-sm">Clothing</td>
                    <td class="text-sm">$869</td>
                    <td class="text-sm">634729</td>
                    <td class="text-sm">725</td>
                    <td>
                      <span class="badge badge-success badge-sm">in Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck6" class="form-check-input" type="checkbox" />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/off-white-jacket.jpg"
                          alt="off_white" />
                        <h6 class="my-auto ms-3">Off White Cotton Bomber</h6>
                      </div>
                    </td>
                    <td class="text-sm">Clothing</td>
                    <td class="text-sm">$1,869</td>
                    <td class="text-sm">634729</td>
                    <td class="text-sm">725</td>
                    <td>
                      <span class="badge badge-success badge-sm">in Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck7" class="form-check-input" type="checkbox" checked />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/yohji-yamamoto.jpg"
                          alt="yohji" />
                        <h6 class="my-auto ms-3">Y-3 Yohji Yamamoto</h6>
                      </div>
                    </td>
                    <td class="text-sm">Shoes</td>
                    <td class="text-sm">$869</td>
                    <td class="text-sm">634729</td>
                    <td class="text-sm">725</td>
                    <td>
                      <span class="badge badge-success badge-sm">In Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck9" class="form-check-input" type="checkbox" checked />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/mcqueen-shirt.jpg"
                          alt="mcqueen" />
                        <h6 class="my-auto ms-3">Alexander McQueen</h6>
                      </div>
                    </td>
                    <td class="text-sm">Clothing</td>
                    <td class="text-sm">$1,199</td>
                    <td class="text-sm">00121399</td>
                    <td class="text-sm">51293</td>
                    <td>
                      <span class="badge badge-success badge-sm">in Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck11" class="form-check-input" type="checkbox" checked />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/yellow-chair.jpg"
                          alt="coco" />
                        <h6 class="my-auto ms-3">Luin Floor Lamp</h6>
                      </div>
                    </td>
                    <td class="text-sm">Furniture</td>
                    <td class="text-sm">$1,900</td>
                    <td class="text-sm">434729</td>
                    <td class="text-sm">1100191321</td>
                    <td>
                      <span class="badge badge-success badge-sm">In Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck12" class="form-check-input" type="checkbox" />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/heron-tshirt.jpg"
                          alt="heron" />
                        <h6 class="my-auto ms-3">Heron Preston T-shirt</h6>
                      </div>
                    </td>
                    <td class="text-sm">Clothing</td>
                    <td class="text-sm">$149</td>
                    <td class="text-sm">928341</td>
                    <td class="text-sm">0</td>
                    <td>
                      <span class="badge badge-danger badge-sm">Out of Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck13" class="form-check-input" type="checkbox" checked />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/living-chair.jpg"
                          alt="coco" />
                        <h6 class="my-auto ms-3">Gray Living Chair</h6>
                      </div>
                    </td>
                    <td class="text-sm">Furniture</td>
                    <td class="text-sm">$2,099</td>
                    <td class="text-sm">9912834</td>
                    <td class="text-sm">32</td>
                    <td>
                      <span class="badge badge-success badge-sm">in Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck4" class="form-check-input" type="checkbox" />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/orange-sofa.jpg"
                          alt="yohji" />
                        <h6 class="my-auto ms-3">Derbyshire Orange Sofa</h6>
                      </div>
                    </td>
                    <td class="text-sm">Furniture</td>
                    <td class="text-sm">$2,999</td>
                    <td class="text-sm">561151</td>
                    <td class="text-sm">22</td>
                    <td>
                      <span class="badge badge-success badge-sm">in Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck8" class="form-check-input" type="checkbox" checked />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/burberry.jpg"
                          alt="undercover" />
                        <h6 class="my-auto ms-3">Burberry Low-Tops</h6>
                      </div>
                    </td>
                    <td class="text-sm">Shoes</td>
                    <td class="text-sm">$869</td>
                    <td class="text-sm">634729</td>
                    <td class="text-sm">725</td>
                    <td>
                      <span class="badge badge-success badge-sm">in Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck22" class="form-check-input" type="checkbox" />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/d&g-skirt.jpg"
                          alt="D&G" />
                        <h6 class="my-auto ms-3">Dolce & Gabbana Skirt</h6>
                      </div>
                    </td>
                    <td class="text-sm">Designer</td>
                    <td class="text-sm">$999</td>
                    <td class="text-sm">01827391</td>
                    <td class="text-sm">0</td>
                    <td>
                      <span class="badge badge-danger badge-sm">Out of Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <div class="my-auto form-check">
                          <input id="customCheck23" class="form-check-input" type="checkbox" checked />
                        </div>
                        <img class="w-10 ms-3"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/undercover.jpg"
                          alt="undercover" />
                        <h6 class="my-auto ms-3">Undercover T-shirt</h6>
                      </div>
                    </td>
                    <td class="text-sm">Shoes</td>
                    <td class="text-sm">$869</td>
                    <td class="text-sm">634729</td>
                    <td class="text-sm">725</td>
                    <td>
                      <span class="badge badge-success badge-sm">in Stock</span>
                    </td>
                    <td class="text-sm">
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview clinic">
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit clinic">
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a>
                      <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete clinic">
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table> -->
              <table id="clinic-table" class="table table-flush">
                {{ clinics }}
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
//import { useClinicStore } from "../../stores/clinic";
import { onMounted, onUpdated, ref } from "vue";
import { db } from '@/firebase'
import { query, onSnapshot, collection, orderBy } from "firebase/firestore";

//firestore 
const colRef = collection(db, "clinics")
const q = query(colRef, orderBy('createdAt', 'asc'))
const listRef = ref([])
let clinics = listRef.value
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
console.log('firestore connected')
console.log(clinics)

//simple datatable
/* const dataTable = new DataTable("#clinic-table", {
  searchable: false,
  fixedHeight: true
}) */

/* let obj = {
  headings: Object.keys(clinics[0]),
  data: []
}
for (let i = 0; i < clinics.length; i++) {
  obj.data[i] = []
  for (let p in clinics[i]) {
    if (clinics[i].hasOwnProperty(p)) {
      obj.data[i].push(clinics[i][p])
    }
  }
}
console.log(obj) */



/* onMounted(() => {

})
 */






/* let dataTable = new DataTable("#clinic-table")






/*
  dataTable.columns().remove([0, 2, 3, 6])
  dataTable.columns().order([0, 2, 1])

 */

// onMounted(() => {
//     if (document.getElementById("clinic-list")) {
//       const dataTableSearch = new DataTable("#clinic-list", { searchable: true, fixedHeight: false, perPage: 7})

//       document.querySelectorAll(".export").forEach(function (el) {
//         el.addEventListener("click", function () {
//           var type = el.dataset.type
//           var data = { type: type,  filename: "soft-ui-" + type }

//           if (type === "csv") { data.columnDelimiter = "|"  }
//           dataTableSearch.export(data);
//         })
//       })
//     }
//     setTooltip()
//   })
</script>
