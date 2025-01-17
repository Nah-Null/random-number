let countValue = 0; // เริ่มตัวนับที่ 0

function count() {
    // เพิ่มค่าตัวนับทีละ 1
    countValue += 1;
    document.getElementById("th").innerHTML = countValue; // แสดงผลตัวนับใน <span id="th">

    // ดึงค่าที่ผู้ใช้ป้อนจาก <input id="user_input">
    const userNumber = document.getElementById("user_input").value;
    document.getElementById("user_number").innerHTML = userNumber; // แสดงค่าที่ผู้ใช้ป้อนใน <span id="user_number">

    // สุ่มตัวเลขระหว่าง 1 ถึง 100 และแสดงใน <span id="number">
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("number").innerHTML = randomNumber;

    // ตรวจสอนการถูกรางวัน
    if(userNumber == randomNumber){
        document.getElementById("sd").innerHTML = '<img src="https://i.pinimg.com/564x/55/89/e7/5589e797100a4d30c7b41e9b25aaba3f.jpg" alt="" >';
    }
    else{
        document.getElementById("sd").innerHTML = '<img src="https://i.pinimg.com/564x/a3/44/7d/a3447de59f226814373f3db4c58f353c.jpg" alt="" >';
    }
}


function photo() {
    // ใช้ prompt เพื่อขอ URL จากผู้ใช้
    const userNumber = prompt("กรุณาใส่ URL ของรูปภาพ:");

    // ตรวจสอบว่า URL มีค่าหรือไม่
    if (!userNumber) {
        alert("คุณไม่ได้ใส่ URL ของรูปภาพ!");
        return;
    }

    // สร้างแท็ก <img> ใหม่
    const img = document.createElement("img");
    img.src = userNumber;
    img.alt = "User Input Image";

    // สุ่มตำแหน่ง
    const randomX = Math.random() * 80; // สุ่มตำแหน่ง X (เป็นเปอร์เซ็นต์)
    const randomY = Math.random() * 80; // สุ่มตำแหน่ง Y (เป็นเปอร์เซ็นต์)

    // กำหนดสไตล์ให้รูปภาพ (ตำแหน่งและขนาด)
    img.style.position = "absolute";
    img.style.left = `${randomX}%`; // ตั้งค่าตำแหน่ง X
    img.style.top = `${randomY}%`;  // ตั้งค่าตำแหน่ง Y
    img.style.maxWidth = "100px"; // ขนาดสูงสุดของรูปภาพ
    img.style.maxHeight = "100px"; // ขนาดสูงสุดของรูปภาพ

    // เพิ่มรูปภาพลงใน div โดยไม่ลบรูปเก่า
    document.getElementById("user_number").appendChild(img);
}





