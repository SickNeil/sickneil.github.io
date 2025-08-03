// 多語系設定
const languages = {
  'zh-TW': {
    title: 'PekoMari 體操蓋章',
    nameLabel: '姓名：',
    namePlaceholder: '請輸入姓名',
    dateLabel: '補登：',
    dateSelectPlaceholder: '請選擇要補登的日期',
    importLabel: '匯入蓋章記錄：',
    makeupStampBtn: '補登蓋章',
    stampBtn: '蓋章',
    downloadBtn: '匯出蓋章記錄',
    exportCardBtn: '儲存為PNG檔',
    clearBtn: '清除蓋章記錄',
    monthDay: (day) => `8月${day}日`,
    alerts: {
      nameRequired: '請先輸入姓名再蓋章！',
      nameRequiredMakeup: '請先輸入姓名再補登！',
      dateRequired: '請選擇要補登的日期！',
      notStampDate: '今天不是可以蓋章的日期！',
      alreadyStamped: '今天已經蓋過章囉！',
      alreadyStampedMakeup: (day) => `8月${day}日已經蓋過章了，是否要重新蓋章？`,
      stampSuccess: '蓋章成功！已自動儲存記錄。',
      makeupSuccess: (day) => `8月${day}日補登成功！已自動儲存記錄。`,
      recordImported: '紀錄已匯入並儲存！',
      jsonError: 'JSON 格式錯誤',
      backupDownloaded: '蓋章記錄已下載！',
      exportComplete: (name) => `${name}的廣播體操卡片已儲存為PNG檔！`,
      exportFailed: '儲存PNG檔失敗！\n\n建議解決方案：\n1. 請確保圖片檔案(card.jpg, stamp.png)與HTML檔案在同一資料夾\n2. 檢查瀏覽器控制台是否有錯誤訊息\n3. 或使用螢幕截圖功能手動截取\n\n鍵盤快捷鍵：\nWindows: Win + Shift + S\nmacOS: Cmd + Shift + 4',
      clearConfirm: '確定要清除蓋章記錄嗎？此操作無法復原。',
      recordsCleared: '蓋章記錄已清除！'
    },
    exportingText: '儲存中...'
  },
  'ja': {
    title: 'ぺこマリ体操スタンプ',
    nameLabel: '名前：',
    namePlaceholder: '名前を入力してください',
    dateLabel: '補記：',
    dateSelectPlaceholder: '補記する日付を選択してください',
    importLabel: 'スタンプ記録読込：',
    makeupStampBtn: '補記スタンプ',
    stampBtn: 'スタンプ',
    downloadBtn: 'スタンプ記録出力',
    exportCardBtn: 'PNG保存',
    clearBtn: 'スタンプ記録消去',
    monthDay: (day) => `8月${day}日`,
    alerts: {
      nameRequired: '先に名前を入力してからスタンプしてください！',
      nameRequiredMakeup: '先に名前を入力してから補記してください！',
      dateRequired: '補記する日付を選択してください！',
      notStampDate: '今日はスタンプできる日付ではありません！',
      alreadyStamped: '今日はすでにスタンプ済みです！',
      alreadyStampedMakeup: (day) => `8月${day}日はすでにスタンプ済みです。再度スタンプしますか？`,
      stampSuccess: 'スタンプ成功！自動保存されました。',
      makeupSuccess: (day) => `8月${day}日の補記が成功しました！自動保存されました。`,
      recordImported: '記録がインポートされ保存されました！',
      jsonError: 'JSON形式エラー',
      backupDownloaded: 'スタンプ記録がダウンロードされました！',
      exportComplete: (name) => `${name}のラジオ体操カードがPNGで保存されました！`,
      exportFailed: 'PNG保存失敗！\n\n解決方法：\n1. 画像ファイル(card.jpg, stamp.png)がHTMLファイルと同じフォルダにあることを確認\n2. ブラウザのコンソールでエラーメッセージを確認\n3. またはスクリーンショット機能を使用\n\nキーボードショートカット：\nWindows: Win + Shift + S\nmacOS: Cmd + Shift + 4',
      clearConfirm: 'スタンプ記録を消去しますか？この操作は元に戻せません。',
      recordsCleared: 'スタンプ記録が消去されました！'
    },
    exportingText: '保存中...'
  },
  'en': {
    title: 'PekoMari Radio Exercises Stamp',
    nameLabel: 'Name:',
    namePlaceholder: 'Enter your name',
    dateLabel: 'Makeup:',
    dateSelectPlaceholder: 'Select date for makeup stamp',
    importLabel: 'Import Stamp Records:',
    makeupStampBtn: 'Makeup Stamp',
    stampBtn: 'Stamp',
    downloadBtn: 'Export Stamp Records',
    exportCardBtn: 'Save as PNG',
    clearBtn: 'Clear Stamp Records',
    monthDay: (day) => `Aug ${day}`,
    alerts: {
      nameRequired: 'Please enter your name before stamping!',
      nameRequiredMakeup: 'Please enter your name before makeup stamp!',
      dateRequired: 'Please select a date for makeup stamp!',
      notStampDate: 'Today is not a valid stamp date!',
      alreadyStamped: 'Already stamped today!',
      alreadyStampedMakeup: (day) => `Aug ${day} is already stamped. Do you want to re-stamp?`,
      stampSuccess: 'Stamp successful! Automatically saved.',
      makeupSuccess: (day) => `Aug ${day} makeup stamp successful! Automatically saved.`,
      recordImported: 'Records imported and saved!',
      jsonError: 'JSON format error',
      backupDownloaded: 'Stamp records downloaded!',
      exportComplete: (name) => `${name}'s radio exercises card saved as PNG!`,
      exportFailed: 'Save PNG failed!\n\nSolutions:\n1. Ensure image files (card.jpg, stamp.png) are in the same folder as HTML file\n2. Check browser console for error messages\n3. Or use screenshot function\n\nKeyboard shortcuts:\nWindows: Win + Shift + S\nmacOS: Cmd + Shift + 4',
      clearConfirm: 'Are you sure you want to clear stamp records? This action cannot be undone.',
      recordsCleared: 'Stamp records cleared!'
    },
    exportingText: 'Saving...'
  }
};

let currentLanguage = 'en'; // 預設語言

// 偵測系統語言
function detectSystemLanguage() {
  const systemLang = navigator.language || navigator.userLanguage;
  if (systemLang.startsWith('zh-TW') || systemLang.startsWith('zh-Hant')) {
    return 'zh-TW';
  } else if (systemLang.startsWith('ja')) {
    return 'ja';
  } else {
    return 'en'; // 預設英文
  }
}

// 更新界面語言
function updateLanguage(lang) {
  currentLanguage = lang;
  const texts = languages[lang];
  
  // 更新標題
  document.title = texts.title;
  
  // 更新標籤
  document.getElementById('nameLabel').textContent = texts.nameLabel;
  document.getElementById('nameInput').placeholder = texts.namePlaceholder;
  document.getElementById('dateLabel').textContent = texts.dateLabel;
  document.getElementById('importLabel').textContent = texts.importLabel;
  
  // 更新按鈕
  document.getElementById('makeupStampBtn').textContent = texts.makeupStampBtn;
  document.getElementById('stampBtn').textContent = texts.stampBtn;
  document.getElementById('downloadBtn').textContent = texts.downloadBtn;
  document.getElementById('exportCardBtn').textContent = texts.exportCardBtn;
  document.getElementById('clearBtn').textContent = texts.clearBtn;
  
  // 更新日期選擇器
  initializeDateSelect();
  
  // 儲存語言偏好
  localStorage.setItem('preferredLanguage', lang);
}

const stampImgSrc = "stamp.png";
let stampData = {}; // 蓋章資料

// 載入本機儲存的資料
function loadFromLocalStorage() {
  const saved = localStorage.getItem('stampRecord');
  if (saved) {
    try {
      stampData = JSON.parse(saved);
      if (stampData._name) {
        nameInput.value = stampData._name;
        nameDisplay.textContent = stampData._name;
      }
      renderStamps();
    } catch (e) {
      console.error('載入本機資料失敗:', e);
    }
  }
}

// 儲存到本機
function saveToLocalStorage() {
  stampData._name = nameInput.value;
  localStorage.setItem('stampRecord', JSON.stringify(stampData));
}

// 每天 stamp 的絕對座標
const weekdayOffset = {
  mon: 82,
  tue: 219,
  wed: 355,
  thu: 489,
  fri: 624,
  sat: 755,
  sun: 891
};
const weekRowOffset = {
  r1:712,
  r2:877,
  r3:1042
};
const stampPositions = {
  2:  {x: weekdayOffset.sat, y: weekRowOffset.r1},
  3:  {x: weekdayOffset.sun, y: weekRowOffset.r1},
  4:  {x: weekdayOffset.mon, y: weekRowOffset.r2},
  5:  {x: weekdayOffset.tue, y: weekRowOffset.r2},
  6:  {x: weekdayOffset.wed, y: weekRowOffset.r2},
  7:  {x: weekdayOffset.thu, y: weekRowOffset.r2},
  8:  {x: weekdayOffset.fri, y: weekRowOffset.r2},
  9:  {x: weekdayOffset.sat, y: weekRowOffset.r2},
  10: {x: weekdayOffset.sun, y: weekRowOffset.r2},
  11: {x: weekdayOffset.mon, y: weekRowOffset.r3},
  12: {x: weekdayOffset.tue, y: weekRowOffset.r3},
  13: {x: weekdayOffset.wed, y: weekRowOffset.r3},
  14: {x: weekdayOffset.thu, y: weekRowOffset.r3},
  15: {x: weekdayOffset.fri, y: weekRowOffset.r3},
  16: {x: weekdayOffset.sat, y: weekRowOffset.r3},
};

const calendar = document.getElementById("calendar");
const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");
const dateSelect = document.getElementById("dateSelect");
const languageSelect = document.getElementById("languageSelect");

// 語言選擇器事件
languageSelect.addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

// 初始化日期選擇器
function initializeDateSelect() {
  const texts = languages[currentLanguage];
  
  // 清空現有選項
  dateSelect.innerHTML = `<option value="">${texts.dateSelectPlaceholder}</option>`;
  
  // 添加 8/2 到 8/16 的選項
  for (let day = 2; day <= 16; day++) {
    const option = document.createElement("option");
    option.value = day;
    option.textContent = texts.monthDay(day);
    
    // 如果已經蓋過章，在選項後面加上 "✓"
    if (stampData[day]) {
      option.textContent += " ✓";
      option.style.color = "#28a745";
    }
    
    dateSelect.appendChild(option);
  }
}

// 即時更新姓名顯示和儲存
nameInput.addEventListener("input", () => {
  nameDisplay.textContent = nameInput.value;
  saveToLocalStorage(); // 即時儲存姓名
});

// 頁面載入時自動載入資料
window.addEventListener('load', () => {
  // 初始化語言
  const savedLanguage = localStorage.getItem('preferredLanguage');
  const systemLanguage = detectSystemLanguage();
  const initLanguage = savedLanguage || systemLanguage;
  
  languageSelect.value = initLanguage;
  updateLanguage(initLanguage);
  
  loadFromLocalStorage();
  initializeDateSelect();
});

// --- 檔案上傳讀取 JSON ---
document.getElementById("fileInput").addEventListener("change", function(evt) {
  const file = evt.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      stampData = JSON.parse(e.target.result);
      // 若記錄檔中有姓名，載入
      if(stampData._name){
        nameInput.value = stampData._name;
        nameDisplay.textContent = stampData._name;
      }
      renderStamps();
      saveToLocalStorage(); // 匯入後存檔到本機
      initializeDateSelect(); // 更新日期選擇器
      Swal.fire({
        icon: 'success',
        title: languages[currentLanguage].alerts.recordImported,
        confirmButtonText: 'OK'
      });
    } catch {
      Swal.fire({
        icon: 'error',
        title: languages[currentLanguage].alerts.jsonError,
        confirmButtonText: 'OK'
      });
    }
  };
  reader.readAsText(file);
});

// --- 蓋章按鈕 ---
document.getElementById("stampBtn").addEventListener("click", () => {
  // 檢查姓名是否已填寫
  const currentName = nameInput.value.trim();
  if (!currentName) {
    Swal.fire({
      icon: 'warning',
      title: languages[currentLanguage].alerts.nameRequired,
      confirmButtonText: 'OK'
    });
    nameInput.focus(); // 將焦點移到姓名輸入欄
    return;
  }

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  if (month !== 8 || day < 2 || day > 16) {
    Swal.fire({
      icon: 'info',
      title: languages[currentLanguage].alerts.notStampDate,
      confirmButtonText: 'OK'
    });
    return;
  }
  if (stampData[day]) {
    Swal.fire({
      icon: 'info',
      title: languages[currentLanguage].alerts.alreadyStamped,
      confirmButtonText: 'OK'
    });
    return;
  }

  const offsetX = (Math.random() - 0.5) * 20;
  const offsetY = (Math.random() - 0.5) * 20;
  const rotate = Math.random() * 50;

  const stampInfo = { offsetX, offsetY, rotate };
  stampData[day] = stampInfo;
  stampData._name = currentName; // 紀錄姓名

  createStamp(day, stampInfo, true);
  saveToLocalStorage(); // 蓋章後自動儲存
  initializeDateSelect(); // 更新日期選擇器
  Swal.fire({
    icon: 'success',
    title: languages[currentLanguage].alerts.stampSuccess,
    confirmButtonText: 'OK'
  });
});

// --- 補登按鈕 ---
document.getElementById("makeupStampBtn").addEventListener("click", async () => {
  // 檢查姓名是否已填寫
  const currentName = nameInput.value.trim();
  if (!currentName) {
    Swal.fire({
      icon: 'warning',
      title: languages[currentLanguage].alerts.nameRequiredMakeup,
      confirmButtonText: 'OK'
    });
    nameInput.focus();
    return;
  }

  // 檢查是否選擇了日期
  const selectedDay = parseInt(dateSelect.value);
  if (!selectedDay) {
    Swal.fire({
      icon: 'warning',
      title: languages[currentLanguage].alerts.dateRequired,
      confirmButtonText: 'OK'
    });
    dateSelect.focus();
    return;
  }

  // 檢查該日期是否已經蓋過章
  if (stampData[selectedDay]) {
    const result = await Swal.fire({
      icon: 'question',
      title: languages[currentLanguage].alerts.alreadyStampedMakeup(selectedDay),
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });
    if (!result.isConfirmed) {
      return;
    }
  }

  const offsetX = (Math.random() - 0.5) * 20;
  const offsetY = (Math.random() - 0.5) * 20;
  const rotate = Math.random() * 50;

  const stampInfo = { offsetX, offsetY, rotate };
  stampData[selectedDay] = stampInfo;
  stampData._name = currentName;

  // 如果是重新蓋章，先移除舊的印章
  const existingStamp = calendar.querySelector(`[data-day="${selectedDay}"]`);
  if (existingStamp) {
    existingStamp.remove();
  }

  createStamp(selectedDay, stampInfo, true);
  saveToLocalStorage();
  initializeDateSelect(); // 更新日期選擇器
  
  // 清空選擇
  dateSelect.value = "";
  
  Swal.fire({
    icon: 'success',
    title: languages[currentLanguage].alerts.makeupSuccess(selectedDay),
    confirmButtonText: 'OK'
  });
});

// --- 匯出備份按鈕 ---
document.getElementById("downloadBtn").addEventListener("click", () => {
  saveToLocalStorage(); // 確保最新資料已儲存
  const data = JSON.stringify(stampData, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  // 產生時間戳記格式 yyyyMMddHHmmss
  const now = new Date();
  const timestamp = now.getFullYear().toString() +
    (now.getMonth() + 1).toString().padStart(2, '0') +
    now.getDate().toString().padStart(2, '0') +
    now.getHours().toString().padStart(2, '0') +
    now.getMinutes().toString().padStart(2, '0') +
    now.getSeconds().toString().padStart(2, '0');

  const a = document.createElement("a");
  a.href = url;
  a.download = `pekomaritaisou-stamp-info_${timestamp}.json`;
  a.click();
  URL.revokeObjectURL(url);
  Swal.fire({
    icon: 'success',
    title: languages[currentLanguage].alerts.backupDownloaded,
    confirmButtonText: 'OK'
  });
});

// --- 匯出卡片按鈕 ---
document.getElementById("exportCardBtn").addEventListener("click", () => {
  const currentName = nameInput.value.trim();
  if (!currentName) {
    Swal.fire({
      icon: 'warning',
      title: languages[currentLanguage].alerts.nameRequired,
      confirmButtonText: 'OK'
    });
    nameInput.focus();
    return;
  }
  
  // 暫時顯示載入訊息
  const originalStampBtnText = document.getElementById("exportCardBtn").textContent;
  document.getElementById("exportCardBtn").textContent = languages[currentLanguage].exportingText;
  document.getElementById("exportCardBtn").disabled = true;
  
  // 確保所有圖片都已載入完成
  const cardImage = document.getElementById("card");
  const stampImages = document.querySelectorAll(".stamp");
  
  // 等待底圖載入
  const waitForImageLoad = (img) => {
    return new Promise((resolve) => {
      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve; // 即使載入失敗也繼續
      }
    });
  };
  
  // 等待所有圖片載入完成
  const imagePromises = [waitForImageLoad(cardImage)];
  stampImages.forEach(img => imagePromises.push(waitForImageLoad(img)));
  
  Promise.all(imagePromises).then(() => {
    // 使用 html2canvas 將整個日曆區域轉成圖片
    const calendarElement = document.getElementById("calendar");
    
    // 使用 html2canvas 截圖，設定更詳細的選項
    html2canvas(calendarElement, {
      useCORS: true,
      allowTaint: false,
      scale: 2, // 提高解析度
      backgroundColor: '#f0f8ff',
      foreignObjectRendering: false,
      imageTimeout: 15000,
      logging: false, // 關閉日誌
      width: calendarElement.offsetWidth,
      height: calendarElement.offsetHeight,
      onclone: function(clonedDoc) {
        // 在複製的文檔中確保所有圖片都能正確顯示
        const clonedCard = clonedDoc.getElementById('card');
        const clonedStamps = clonedDoc.querySelectorAll('.stamp');
        
        if (clonedCard) {
          clonedCard.style.display = 'block';
          clonedCard.style.visibility = 'visible';
        }
        
        clonedStamps.forEach(stamp => {
          stamp.style.display = 'block';
          stamp.style.visibility = 'visible';
        });
      }
    }).then(canvas => {
      // 將 canvas 轉成下載連結
      const link = document.createElement('a');
      
      // 產生時間戳記格式 yyyyMMddHHmmss
      const now = new Date();
      const timestamp = now.getFullYear().toString() +
        (now.getMonth() + 1).toString().padStart(2, '0') +
        now.getDate().toString().padStart(2, '0') +
        now.getHours().toString().padStart(2, '0') +
        now.getMinutes().toString().padStart(2, '0') +
        now.getSeconds().toString().padStart(2, '0');
      
      link.download = `${currentName}-pekomari-taisou-${timestamp}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      // 恢復按鈕狀態
      document.getElementById("exportCardBtn").textContent = originalStampBtnText;
      document.getElementById("exportCardBtn").disabled = false;
      
      Swal.fire({
        icon: 'success',
        title: languages[currentLanguage].alerts.exportComplete(currentName),
        confirmButtonText: 'OK'
      });
    }).catch(error => {
      console.error('匯出失敗:', error);
      
      Swal.fire({
        icon: 'error',
        title: 'Export Failed',
        text: languages[currentLanguage].alerts.exportFailed,
        confirmButtonText: 'OK'
      });
      
      // 恢復按鈕狀態
      document.getElementById("exportCardBtn").textContent = originalStampBtnText;
      document.getElementById("exportCardBtn").disabled = false;
    });
  });
});

// --- 清除記錄按鈕 ---
document.getElementById("clearBtn").addEventListener("click", async () => {
  const result = await Swal.fire({
    icon: 'warning',
    title: languages[currentLanguage].alerts.clearConfirm,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    confirmButtonColor: '#dc3545'
  });
  
  if (result.isConfirmed) {
    localStorage.removeItem('stampRecord');
    stampData = {};
    nameInput.value = "";
    nameDisplay.textContent = "";
    renderStamps();
    initializeDateSelect(); // 更新日期選擇器
    Swal.fire({
      icon: 'success',
      title: languages[currentLanguage].alerts.recordsCleared,
      confirmButtonText: 'OK'
    });
  }
});

function renderStamps() {
  calendar.querySelectorAll(".stamp").forEach(el => el.remove());
  for (const day in stampData) {
    if (day === "_name") continue;
    createStamp(day, stampData[day]);
  }
}

function createStamp(day, info, animate = false) {
  const pos = stampPositions[day];
  if (!pos) return;

  const img = document.createElement("img");
  img.src = stampImgSrc;
  img.className = "stamp";
  img.setAttribute("data-day", day); // 添加日期標識
  img.style.left = (pos.x + info.offsetX) + "px";
  img.style.top = (pos.y + info.offsetY) + "px";
  img.style.transform = `rotate(${info.rotate}deg) scale(${animate ? 0 : 1})`;
  calendar.appendChild(img);

  if (animate) {
    setTimeout(() => {
      img.style.transform = `rotate(${info.rotate}deg) scale(1)`;
    }, 10);
  }
}
