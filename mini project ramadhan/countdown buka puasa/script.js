var targetDate = new Date();

//dibawah ini ketika combo boxnya berubah maka dia akan memanggil fungsi checkzona
document.getElementById("zona").addEventListener("change", function(){
    checkZona();
});

    function checkZona(){
        //buat variabel untuk ngambil nilai dari combobox
        var selectedOption = document.getElementById("zona").value;

        //kemudian buat kondisi sesuai dengan valuenya
        //lalu tambahkan waktu sesuai dengan waktu buka
        if (selectedOption === "Medan"){
            targetDate.setHours(18);
            targetDate.setMinutes(41);
        } else if (selectedOption === "Banda Aceh"){
            targetDate.setHours(18);
            targetDate.setMinutes(54);
        } else if (selectedOption === "Palembang"){
            targetDate.setHours(18);
            targetDate.setMinutes(18);
        } else if (selectedOption === "Padang"){
            targetDate.setHours(18);
            targetDate.setMinutes(43);
        } else if (selectedOption === "Bengkulu"){
            targetDate.setHours(18);
            targetDate.setMinutes(36);
        } else if (selectedOption === "Pekanbaru"){
            targetDate.setHours(18);
            targetDate.setMinutes(30);
        } else if (selectedOption === "Jambi"){
            targetDate.setHours(18);
            targetDate.setMinutes(22);
        } else if (selectedOption === "Bandar Lampung"){
            targetDate.setHours(18);
            targetDate.setMinutes(12);
        } else if (selectedOption === "Pangkal Pinang"){
            targetDate.setHours(18);
            targetDate.setMinutes(12);
        } else if (selectedOption === "Serang"){
            targetDate.setHours(18);
            targetDate.setMinutes(13);
        } else if (selectedOption === "Jakarta"){
            targetDate.setHours(18);
            targetDate.setMinutes(10);
        } else if (selectedOption === "Bandung"){
            targetDate.setHours(18);
            targetDate.setMinutes(12);
        } else if (selectedOption === "Semarang"){
            targetDate.setHours(17);
            targetDate.setMinutes(51);
        } else if (selectedOption === "Yogyakarta"){
            targetDate.setHours(17);
            targetDate.setMinutes(56);
        } else if (selectedOption === "Surabaya"){
            targetDate.setHours(18);
            targetDate.setMinutes(10);
        } else if (selectedOption === "Denpasar"){
            targetDate.setHours(18);
            targetDate.setMinutes(37);
        } else if (selectedOption === "Pontianak"){
            targetDate.setHours(18);
            targetDate.setMinutes(18);
        } else if (selectedOption === "Samarinda"){
            targetDate.setHours(18);
            targetDate.setMinutes(28);
        } else if (selectedOption === "Banjarbaru"){
            targetDate.setHours(18);
            targetDate.setMinutes(34);
        } else if (selectedOption === "Palangkaraya"){
            targetDate.setHours(17);
            targetDate.setMinutes(41);
        } else if (selectedOption === "Tanjung Selor"){
            targetDate.setHours(18);
            targetDate.setMinutes(25);
        } else if (selectedOption === "Gorontalo"){
            targetDate.setHours(18);
            targetDate.setMinutes(1);
        } else if (selectedOption === "Mamuju"){
            targetDate.setHours(18);
            targetDate.setMinutes(21);
        } else if (selectedOption === "Palu"){
            targetDate.setHours(18);
            targetDate.setMinutes(17);
        } else if (selectedOption === "Manado"){
            targetDate.setHours(17);
            targetDate.setMinutes(54);
        } else if (selectedOption === "Kendari"){
            targetDate.setHours(18);
            targetDate.setMinutes(7);
        } else if (selectedOption === "Makassar"){
            targetDate.setHours(18);
            targetDate.setMinutes(18);
        } else if (selectedOption === "Mataram"){
            targetDate.setHours(18);
            targetDate.setMinutes(39);
        } else if (selectedOption === "Kupang"){
            targetDate.setHours(17);
            targetDate.setMinutes(58);
        } else if (selectedOption === "Sofifi"){
            targetDate.setHours(18);
            targetDate.setMinutes(46);
        } else if (selectedOption === "Ambon"){
            targetDate.setHours(18);
            targetDate.setMinutes(40);
        } else if (selectedOption === "Jayapura"){
            targetDate.setHours(17);
            targetDate.setMinutes(54);
        } else if (selectedOption === "Manokwari"){
            targetDate.setHours(18);
            targetDate.setMinutes(17);
        } else if (selectedOption === "Merauke"){
            targetDate.setHours(18);
            targetDate.setMinutes(2);
        } else if (selectedOption === "Sorong"){
            targetDate.setHours(18);
            targetDate.setMinutes(31);
        } else if (selectedOption === "Jayawijaya"){
            targetDate.setHours(18);
            targetDate.setMinutes(1);
        }

        //dibawah ini untuk membuat jam bukanya
        //pertama dijadikan variabel
        //kedua ambil id dan gunakan fungsi inner html untuk menambahkan string/text
        var jam = targetDate.getHours();
        var menit = targetDate.getMinutes();
        document.getElementById("buka").innerHTML = "Jam Buka : " + jam + ":" + menit;
    }

    //dibawah ini function untuk membuat countdownnya
    function countdown() {
        //buat variabel baru untuk mengambil waktu sekarang
        var currentDate = new Date();
        //kemudian buat variabel lagi untuk jarak antara waktu sekarang dan waktu target
        var difference = targetDate - currentDate;

        //kemudian buat rumus jam, menit, dan detiknya
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        //kemudian tampilkan
        document.getElementById("countdown").innerHTML = hours + " jam " + minutes + " menit " + seconds + " detik ";

        //dibawah ini kondisi untuk jika jarak waktu tadi dibawah 0
        if (difference < 0) {
        //ubah output waktu tadi menjadi "BUKAAAAAAAAAAAAA"
        document.getElementById("countdown").innerHTML = "BUKAAAAAAAAAAA";
        //kemudian buat variabel audio dan putar
        var audio = document.getElementById("adzan");
        audio.play();
        //lalu selesaikan hitung mundurnya
        clearInterval(interval);
        }
    }

    function updateTime(){
        //deklarasikan waktu sekarang dan ambil waktu sekarang
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        //kemudian update nilainya menggunakan operator tenary agar klo dibawah 10 jadi 08 gitu
        hours = (hours < 10 ? "0" : "") + hours;
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;

        //disini aku buat variabel baru untuk innernya nanti
        var currentTimeString = hours + ":" + minutes + ":" + seconds;

        document.getElementById("now").innerHTML = currentTimeString;
    }

    //memanggil fungsi checkZona
    checkZona();

    //mengupdate tiap detik function updateTime dan countDownnya
    setInterval(updateTime, 1000)
    setInterval(countdown, 1000);