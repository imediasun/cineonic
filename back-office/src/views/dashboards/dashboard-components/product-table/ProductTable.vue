<template>
  <div>
    <b-table
      responsive
      class="mb-0 mt-3"
      :items="items"
      table-class="bg-transparent text-nowrap"
    >
      <!-- <template #cell(id)="data"> #{{ data.item.id }} </template> -->
      <template #cell(products)="data">
        <div class="d-flex align-items-center">
          <b-img
            :src="
              require('@/assets/images/product/' + data.item.products.image)
            "
            :alt="data.item.products.image"
            width="45"
          />
          <div class="ml-3">
            <h6 class="fw-medium mb-0">
              {{ data.item.products.pname }}
            </h6>
          </div>
        </div>
      </template>
      <template #cell(customers)="data">
        <span>{{ data.item.customers }}</span>
      </template>
      <template #cell(status)="data">
        <span :class="data.item.status">
          <i class="fa fa-circle"></i>
        </span>
      </template>
      <template #cell(invoice)="data">
        <span>{{ data.item.invoice }}</span>
      </template>
      <template #cell(amount)="data">
        <span class="fw-medium">{{ data.item.amount }}</span>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  name: "ProductTable",
  data: () => ({
    title: "ProductTable",
    // Data for Product Table
    fields: [
      {
        key: "products",
        label: "Products",
      },
      {
        key: "customers",
        label: "customers",
      },
      {
        key: "status",
        label: "Status",
      },
      {
        key: "invoice",
        label: "invoice",
      },
      {
        key: "amount",
        label: "amount",
      },
    ],
    items: [
      {
        products: {
          image: "chair.png",
          pname: "Orange Shoes",
        },
        customers: "Rotating Chair",
        status: "text-orange",
        weeks: "35",
        amount: "$96K",
      },
      {
        products: {
          image: "chair2.png",
          pname: "Red Sandle",
        },

        customers: "Dummy Product	",
        status: "text-success",
        weeks: "35",
        amount: "$96K",
      },
      {
        products: {
          image: "chair3.png",
          pname: "Gourgeous Purse",
        },
        customers: "Comfortable Chair",
        status: "text-orange",
        weeks: "35",
        amount: "$96K",
      },
      {
        products: {
          image: "chair4.png",
          pname: "Puma T-shirt",
        },

        customers: "Wooden Chair",
        status: "text-orange",
        weeks: "35",
        amount: "$96K",
      },
      {
        products: {
          image: "chair.png",
          pname: "Orange Shoes",
        },
        customers: "Rotating Chair",
        status: "text-success",
        weeks: "35",
        amount: "$96K",
      },
    ],
    producttable: [
      {
        img: "/chair.png",
        productname: "Orange Shoes",
        producttext: "Rotating Chair",
        statustext: "In Progress",
        statuscolor: "warning",
        status: "text-warning",
        invoice: "35",
        amount: "$96K",
      },
      {
        img: "/chair2.png",
        productname: "Red Sandle",
        producttext: "Dummy Product",
        statustext: "Active",
        statuscolor: "success",
        status: "text-success",
        invoice: "35",
        amount: "$96K",
      },
      {
        img: "/chair3.png",
        productname: "Gourgeous Purse",
        producttext: "Comfortable Chair",
        statustext: "Active",
        statuscolor: "success",
        status: "text-success",
        invoice: "35",
        amount: "$96K",
      },
      {
        img: "/chair4.png",
        productname: "Puma T-shirt",
        producttext: "Wooden Chair",
        statustext: "In Progress",
        statuscolor: "warning",
        status: "text-warning",
        invoice: "35",
        amount: "$96K",
      },
    ],
  }),
};
</script>