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
      watchGoods: { text: "Xem mặt hàng", link: "/storage/create-request" },
      importGoods: { text: "Nhập hàng vào", link: "/storage/leave-request" },
      exportGoods: { text: "Xuất hàng ra", link: "/storage/employee-leave" }
    }
  },
  {
    groupName: "THANH TOÁN",
    functions: {
      paymentRequest: { text: "Đơn hàng", link: "/storage/payment" },
    }
  }
];
