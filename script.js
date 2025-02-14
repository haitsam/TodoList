// Mendapatkan elemen dari DOM yang akan digunakan
const addBtn = document.getElementById("add-btn"); // Tombol untuk menambah tugas
const todoInput = document.getElementById("todo-input"); // Input tempat pengguna mengetik tugas
const todoList = document.getElementById("todo-list"); // Daftar tugas (ul)

// Event listener untuk tombol tambah tugas
addBtn.addEventListener("click", function () {
    const task = todoInput.value.trim(); // Mengambil nilai dari input dan menghapus spasi di awal/akhir
    if (task !== "") {
        // Mengecek apakah input tidak kosong
        const li = document.createElement("li"); // Membuat elemen <li> baru
        li.textContent = task; // Menambahkan teks tugas ke elemen <li>

        // Menambahkan tombol hapus untuk tugas baru
        const deleteBtn = document.createElement("button"); // Membuat tombol hapus
        deleteBtn.textContent = "Hapus"; // Menambahkan teks "Hapus" pada tombol
        deleteBtn.addEventListener("click", function () {
            // Event listener untuk menghapus tugas dari daftar
            todoList.removeChild(li); // Menghapus elemen <li> dari daftar
            saveToLocalStorage(); // Memperbarui Local Storage setelah penghapusan
        });

        li.appendChild(deleteBtn); // Menambahkan tombol hapus ke dalam elemen <li>
        todoList.appendChild(li); // Menambahkan elemen <li> ke dalam <ul>
        todoInput.value = ""; // Mengosongkan input setelah tugas ditambahkan
        saveToLocalStorage(); // Menyimpan tugas baru ke dalam Local Storage
    }
});

function saveToLocalStorage() {
    // Fungsi ini menyimpan semua tugas ke dalam Local Storage
    const tasks = []; // Array untuk menyimpan teks tugas
    document.querySelectorAll("#todo-list li").forEach((li) => {
        tasks.push(li.firstChild.textContent); // Menyimpan teks dari setiap tugas
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Menyimpan array tugas sebagai string JSON di Local Storage
}

function loadFromLocalStorage() {
    // Fungsi ini memuat data dari Local Storage dan menampilkannya di daftar tugas
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Mengambil data dari Local Storage atau array kosong jika belum ada data
    tasks.forEach((task) => {
        const li = document.createElement("li"); // Membuat elemen <li> baru
        li.textContent = task; // Menambahkan teks tugas ke elemen <li>

        // Menambahkan tombol hapus untuk setiap tugas
        const deleteBtn = document.createElement("button"); // Membuat tombol hapus
        deleteBtn.textContent = "Hapus"; // Menambahkan teks "Hapus" pada tombol
        deleteBtn.addEventListener("click", function () {
            // Event listener untuk menghapus tugas dari daftar
            todoList.removeChild(li); // Menghapus elemen <li> dari daftar
            saveToLocalStorage(); // Memperbarui Local Storage setelah penghapusan
        });

        li.appendChild(deleteBtn); // Menambahkan tombol hapus ke dalam elemen <li>
        todoList.appendChild(li); // Menambahkan elemen <li> ke dalam <ul>
    });
}

// Memuat tugas dari Local Storage saat halaman pertama kali dimuat
loadFromLocalStorage();


console.log("Script sudah tersambung!");