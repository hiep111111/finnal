export const adminGroup = [
  {
    groupName: " QUẢN TRỊ ",
    functions: {
      staffList: { text: "Danh sách nhân viên", link: "/admin/staffList/" },
      leaveRequest: { text: "Đơn xin nghỉ phép", link: "/admin/leaveSlips/" },
    }
  },
  {
    groupName: "NHÂN VIÊN",
    functions: {
      overtimes: { text: "Đơn xin tăng ca", link: "/admin/overtimes/" }
    }
  }
];
