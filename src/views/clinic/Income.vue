<template>
  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-xl-6 mb-xl-0 mb-4">
            <master-card />
          </div>
          <div class="col-xl-6">
            <div class="row">
              <div class="col-md-6">
                <default-info-card :class-icon="salary.classIcon" :title="salary.title" :desc="salary.desc"
                  :price="salary.price" />
              </div>
              <div class="col-md-6">
                <default-info-card :class-icon="paypal.classIcon" :title="paypal.title" :desc="paypal.desc"
                  :price="paypal.price" />
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-4">
            <payment-card />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <invoice-card />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-7">
        <billing-card />
      </div>
      <div class="col-md-5 mt-4">
        <transaction-card />
      </div>
    </div>
  </div>
</template>

<script>
import NavPill from "@/views/account/components/NavPill.vue";
import MasterCard from "./components/MasterCard.vue";
import DefaultInfoCard from "./components/DefaultInfoCard.vue";
import PaymentCard from "@/views/account/components/PaymentCard.vue";
import InvoiceCard from "@/views/account/components/InvoiceCard.vue";
import BillingCard from "@/views/account/components/BillingCard.vue";
import TransactionCard from "@/views/account/components/TransactionCard.vue";

export default {
  name: "Income",
  components: {
    NavPill,
    MasterCard,
    DefaultInfoCard,
    PaymentCard,
    InvoiceCard,
    BillingCard,
    TransactionCard,
  },
  data() {
    return {
      salary: {
        classIcon: "text-white fas fa-landmark",
        title: "Salary",
        desc: "Belong Interactive",
        price: "+$2000",
      },
      paypal: {
        classIcon: "text-white fab fa-paypal",
        title: "Paypal",
        desc: "Freelance Payment",
        price: "$455.00",
      },
    };
  },
};
</script>
