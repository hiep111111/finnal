export const storageGroup = [
  {
    groupName: " KHO HÀNG",
    functions: {
      analysis: { text: "Phân tích", link: "/storage/analysis" },
    }
  },
  {
    groupName: "QUẢN LÝ",
    functions: {
      importGoods: { text: "Nhập hàng vào", link: "/storage/leave-request" },
      exportGoods: { text: "Xuất hàng ra", link: "/storage/employee-leave" }
    }
  },
  {
    groupName: "THANH TOÁN",
    functions: {
      paymentRequest: { text: "Đơn yêu cầu thanh toán", link: "/storage/payment-request" },
      isPaid: { text: "Đơn đã thanh toán", link: "/storage/payment-paid" }
    }
  }
];
