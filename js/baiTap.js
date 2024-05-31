// Bài 1
document.getElementById("tinhLuong").onclick = function () {
  /**
   * Input: số ngày làm: number
   *        lương 1 ngày: 100.000 number
   */
  let soNgayLam = document.getElementById("nhapNgayLam").value * 1;
  let luongMotNgay = document.getElementById("nhapLuong").value * 1;
  /**
   * OutPut: số lương được nhận: number
   */
  let tongLuong = 0;
  /**
   * Progress: Tính tổng lương được nhận
   */
  tongLuong = (soNgayLam * luongMotNgay).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
  /**
   * In kết quả ra màn hình
   */
  document.getElementById(
    "ketQua1"
  ).innerHTML = `Tổng lương thực nhận làm trong ${soNgayLam} ngày là: ${tongLuong}`;
};

//Bài 2
document.getElementById("tinhSoTB").onclick = function () {
  /**
   * Input: nhập vào số thứ nhất - thứ năm:number
   */
  let So1 = document.getElementById("nhapSo1").value * 1;
  let So2 = document.getElementById("nhapSo2").value * 1;
  let So3 = document.getElementById("nhapSo3").value * 1;
  let So4 = document.getElementById("nhapSo4").value * 1;
  let So5 = document.getElementById("nhapSo5").value * 1;
  /**
   * Output: Số trung bình: number
   */
  let soTB = 0;
  /**
   * Progress: Tính số trung bình
   */
  soTB = ((So1 + So2 + So3 + So4 + So5) / 5).toFixed(2);
  /**
   * In kết quả ra màn hình
   */
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Giá trị trung bình của tổng 5 số là: ${soTB}`;
};

//bài 3
document.getElementById("tinhUSD").onclick = function () {
  /**
   * Input: Nhập số USD: number
   */
  let nhapUSD = document.getElementById("nhapSoUSD").value * 1;
  /**
   * Output: Số tiền quy đổi: number
   */
  let soTienQuyDoi = 0;
  /**
   * Progress: Quỷ đổi tiền
   */
  soTienQuyDoi = (nhapUSD * 23500).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
  /**
   * In kết quả ra màn hình
   */
  document.getElementById(
    "ketQua3"
  ).innerHTML = `Số tiền khi quy đổi ${nhapUSD} USD sang VND là: ${soTienQuyDoi}`;
};

//bài 4
document.getElementById("tinhHCN").onclick = function () {
  /**
   * Input: chiều dài, chiều rộng: number
   */
  let chieuDai = document.getElementById("nhapChieuDai").value * 1;
  let chieuRong = document.getElementById("nhapChieuRong").value * 1;
  /**
   * OutPut: Chu Vi và Diện Tích: number
   */
  let chuVi = 0;
  let dienTich = 0;
  /**
   * Progress: tính diện tích và chu vi
   */
  chuVi = (chieuDai + chieuRong) * 2;
  dienTich = chieuDai * chieuRong;
  /**
   * In kết quả ra màn hình
   */
  document.getElementById(
    "ketQua4"
  ).innerHTML = `HCN chiều dài ${chieuDai}cm chiều rộng ${chieuRong}cm có diện tích là ${dienTich}cm2 và chu vi là ${chuVi}cm`;
};

//bài 5:
document.getElementById("tinhTongChuSo").onclick = function () {
  /**
   * Input: nhấp số có 2 chũ số: number
   */
  let NhapSoHaiChuSo = document.getElementById("nhapSoChuSo").value * 1;
  /**
   * Output: Tổng của số nhập vào
   */
  let tongKySo = 0;
  /**
   * Progress: tính tổng của số nhập vào
   */
  let hangChuc = Math.floor(NhapSoHaiChuSo / 10);
  let donVi = NhapSoHaiChuSo % 10;
  tongKySo = hangChuc + donVi;
  /**
   * In kết quả ra màn hình
   */
  document.getElementById(
    "ketQua5"
  ).innerHTML = `Tổng 2 ký số ${NhapSoHaiChuSo} là: ${tongKySo}`;
};
