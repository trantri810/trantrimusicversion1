/*
 * Icons by:
 * Font Awesome – http://fontawesome.io/
 * Those Icons – https://www.flaticon.com/authors/those-icons
 * EpicCoders – https://www.flaticon.com/authors/epiccoders
 * Smashicons – https://www.flaticon.com/authors/smashicons
 */

$(document).ready(function () {
	var songs = [{
		artist: "RUM",
		name: "Mashup Em Cứ Đi Đi",
		url: "Musics/Mashup Em Cu Di Di Anh cu di di_ - Rum.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Reddy (Hữu Duy)",
		name: "Nếu Một Ngày",
		url: "Musics/NeuMotNgay-Reddy-5521044.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Reddy (Hữu Duy)",
		name: "Thì Thôi",
		url: "Musics/ThiThoi-Reddy-5461229.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Reddy (Hữu Duy)",
		name: "Vài Giây Nữa Thôi",
		url: "Musics/VaiGiayNuaThoi-ReddyHuuDuy-5404370.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Trung Quân",
		name: "Thả Vào Mưa",
		url: "Musics/ThaVaoMua.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Đức Phúc",
		name: "Hết Thương Cạn Nhớ",
		url: "Musics/HetThuongCanNho.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Bùi Anh Tuấn",
		name: "Hẹn Một Mai",
		url: "Musics/HenMotMai-BuiAnhTuan-4652623.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Chillies",
		name: "Và Thế Là Hết",
		url: "Musics/VaTheLaHet-Chillies-5833412.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Dig Didzay",
		name: "Nếu Anh Đi (Cover)",
		url: "Musics/NeuAnhDi.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Trung Quân Idol",
		name: "Trót Yêu",
		url: "Musics/TrotYeu-TrungQuanIdol-2967468.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Noo Phước Thịnh",
		name: "Thương Em Là Điều Anh Không Thể Ngờ",
		url: "Musics/ThuongEmLaDieuAnhKhongTheNgo-NooPhuocThinh-5827347.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Thái Đinh",
		name: "Đi Qua Mùa Hạ",
		url: "Musics/DiQuaMuaHa-ThaiDinh-6037082.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Thái Đinh",
		name: "Phố Không Em",
		url: "Musics/PhoKhongEm-ThaiDinh-4475322.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Trung Quân Idol",
		name: "Dấu Mưa",
		url: "Musics/DauMua-TrungQuanIdol-2640897.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Trung Quân Idol",
		name: "Chiều Nay Không Có Mưa Bay",
		url: "Musics/ChieuNayKhongCoMuaBay-TrungQuanIdol-3314229.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "N Ly",
		name: "Anh nên yêu cô ấy",
		url: "Musics/Anh Nen Yeu Co Ay - N Ly [128kbps_MP3].mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	}, {
		artist: "Vũ",
		name: "Lạ Lùng",
		url: "Musics/LaLung-Vu-4749614.mp3",
		picture: "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
	];
	
	for (let song of songs) {
		$("#songs").append('<li class="song" data-audio="' + song.audioFile + '" data-color="'+ song.color +'">' + 
			'<img src="' + song.cover + '">' +
			'<p class="song-title">' + song.title + '</p>' +
			'<p class="song-artist">' + song.artist + '</p>' + 
			'</li>');
	}
	
	$('.jcarousel').jcarousel({
			wrap: 'circular'
	});
});

/*
 * Replace all SVG images with inline SVG
 */
jQuery('img[src$=".svg"]').each(function(){
	var $img = jQuery(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	jQuery.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = jQuery(data).find('svg');

		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');

		// Replace image with new SVG
		$img.replaceWith($svg);

	}, 'xml');

});

// Current slide
$('.jcarousel').on('jcarousel:visiblein', 'li', function(event, carousel) {
	let cover = $(this).find("img").attr("src");
	let songTitle = $(this).find("p.song-title").html();
	let songArtist = $(this).find("p.song-artist").html();
	let audioSrc = $(this).attr("data-audio");
	let backgroundColor = $(this).attr("data-color");
	$("body").css('background', backgroundColor)
	$("#background").css('background-image', 'url('+cover+')');
	$("audio").find("source").attr("src", ""+audioSrc+"");
	player.load();
	player.currentTime = 0;
	$("#song-info").find("img").attr("src", cover);
	$("#song-info .artist-wrap p").find("span.title").html(songTitle);
	$("#song-info .artist-wrap p").find("span.artist").html(songArtist);
});

// Previous slide
$('#previous-btn').click(function() {
	$('.jcarousel').jcarousel('scroll', '-=1');
	$('#play-btn i').removeClass('fa-pause');
	player.pause();
});

// Next slide
$('#next-btn').click(function() {
	if ($(".fa-random").hasClass('active')) {
		let songs = $("#songs li").length - 1;
		let randomSong = Math.floor(Math.random() * songs) + 1;
		$('.jcarousel').jcarousel('scroll', '+=' + randomSong);
	} else {
		$('.jcarousel').jcarousel('scroll', '+=1');
	}
	$('#play-btn i').removeClass('fa-pause');
	player.pause();
});

// Play Icon Switcher
$('#play-btn').click(function() {
	$(this).find('i').toggleClass('fa-pause');
});

// Menu
$("#menu-btn").click(function() {
	$("#content-wrap").addClass('inactive');
	$("#sidemenu").addClass('active');
});

// Home Button
$("#home-btn").click(function() {
	$("#home-screen").addClass('active');
	$(".menu").removeClass('active');
	$("#content-wrap").addClass('minimized');
});

// App
$(".app-icon").click(function() {
	$("#content-wrap").removeClass('minimized');
	setTimeout(function(){ $("#home-screen").removeClass('active'); }, 300);
});

// Overlay
$("#overlay").click(function () {
	$("#content-wrap").removeClass('inactive');
	$("#sidemenu").removeClass('active');
});

// Options
$("#options-btn").click(function() {
	$("#song-options").addClass('active');
});

// Bluetooth
$("#bluetooth-btn").click(function() {
	$("#bluetooth-devices").addClass('active');
});

// Bluetooth Menu
$("#bluetooth-devices ul li").click(function() {
	$(this).toggleClass('connected');
	$(this).siblings().removeClass('connected');
	
	if ($("#bluetooth-devices ul li").hasClass('connected')) {
		$("#sub-controls i.fa-bluetooth-b").addClass('active');
	} else {
		$("#sub-controls i.fa-bluetooth-b").removeClass('active');
	}
});

// Close Menu
$(".close-btn").click(function() {
	$(".menu").removeClass('active');
});

$('#sub-controls i').click(function () {
	if(!$(this).hasClass('fa-bluetooth-b')) {
		$(this).toggleClass('active');
	}
	
	if ($("#heart-icon").hasClass('active')) {
		$("#heart-icon").removeClass('fa-heart-o');
		$("#heart-icon").addClass('fa-heart');
	} else {
		$("#heart-icon").removeClass('fa-heart');
		$("#heart-icon").addClass('fa-heart-o');
	}
});

/*
 * Music Player
 * By Greg Hovanesyan
 * https://codepen.io/gregh/pen/NdVvbm
 */

var audioPlayer = document.querySelector('#content');
var playpauseBtn = audioPlayer.querySelector('#play-btn');
var progress = audioPlayer.querySelector('.progress');
var sliders = audioPlayer.querySelectorAll('.slider');
var player = audioPlayer.querySelector('audio');
var currentTime = audioPlayer.querySelector('#current-time');
var totalTime = audioPlayer.querySelector('#total-time');

var draggableClasses = ['pin'];
var currentlyDragged = null;

window.addEventListener('mousedown', function(event) {
  
  if(!isDraggable(event.target)) return false;
  
  currentlyDragged = event.target;
  let handleMethod = currentlyDragged.dataset.method;
  
  this.addEventListener('mousemove', window[handleMethod], false);

  window.addEventListener('mouseup', () => {
    currentlyDragged = false;
    window.removeEventListener('mousemove', window[handleMethod], false);
  }, false);  
});

playpauseBtn.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', updateProgress);
player.addEventListener('loadedmetadata', () => {
  totalTime.textContent = formatTime(player.duration);
});
player.addEventListener('ended', function(){
  player.currentTime = 0;
	
	if ($(".fa-refresh").hasClass('active')) {
		togglePlay();
	} else {
		if ($(".fa-random").hasClass('active')) {
			let songs = $("#songs li").length - 1;
			let randomSong = Math.floor(Math.random() * songs) + 1;
			$('.jcarousel').jcarousel('scroll', '+=' + randomSong);
		} else {
			$('.jcarousel').jcarousel('scroll', '+=1');
		}
		togglePlay();
	}
});

sliders.forEach(slider => {
  let pin = slider.querySelector('.pin');
  slider.addEventListener('click', window[pin.dataset.method]);
});

function isDraggable(el) {
  let canDrag = false;
  let classes = Array.from(el.classList);
  draggableClasses.forEach(draggable => {
    if(classes.indexOf(draggable) !== -1)
      canDrag = true;
  })
  return canDrag;
}

function inRange(event) {
  let rangeBox = getRangeBox(event);
  let direction = rangeBox.dataset.direction;
	let screenOffset = document.querySelector("#screen").offsetLeft + 26;
	var min = screenOffset - rangeBox.offsetLeft;
	var max = min + rangeBox.offsetWidth;   
	if(event.clientX < min || event.clientX > max) { return false };
  return true;
}

function updateProgress() {
  var current = player.currentTime;
  var percent = (current / player.duration) * 100;
  progress.style.width = percent + '%';
  
  currentTime.textContent = formatTime(current);
}

function getRangeBox(event) {
  let rangeBox = event.target;
  let el = currentlyDragged;
  if(event.type == 'click' && isDraggable(event.target)) {
    rangeBox = event.target.parentElement.parentElement;
  }
  if(event.type == 'mousemove') {
    rangeBox = el.parentElement.parentElement;
  }
  return rangeBox;
}

function getCoefficient(event) {
  let slider = getRangeBox(event);
	let screenOffset = document.querySelector("#screen").offsetLeft + 26;
  let K = 0;
	let offsetX = event.clientX - screenOffset;
	let width = slider.clientWidth;
	K = offsetX / width;
  return K;
}

function rewind(event) {
  if(inRange(event)) {
    player.currentTime = player.duration * getCoefficient(event);
  }
}

function formatTime(time) {
  var min = Math.floor(time / 60);
  var sec = Math.floor(time % 60);
  return min + ':' + ((sec<10) ? ('0' + sec) : sec);
}

function togglePlay() {
	player.volume = 0.5;
	
  if(player.paused) {
    player.play();
  } else {
    player.pause();
  }  
}
