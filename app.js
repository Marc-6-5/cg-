// 应用主逻辑
(function() {
  const content = document.getElementById('content');
  const sidebar = document.getElementById('sidebar');
  const noteArea = document.getElementById('note-area');
  const notePanel = document.getElementById('note-panel');
  const noteToggle = document.getElementById('note-toggle');
  const noteClear = document.getElementById('note-clear');
  const progressFill = document.getElementById('progress-fill');
  const progressPct = document.getElementById('progress-pct');

  let currentLesson = '1-1';
  let completed = JSON.parse(localStorage.getItem('fib-completed') || '{}');

  // ===== 渲染课程 =====
  function renderLesson(id) {
    const data = lessons[id];
    if (!data) return;
    currentLesson = id;

    // 高亮侧边栏
    document.querySelectorAll('.lesson-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lesson === id);
      b.classList.toggle('completed', completed[b.dataset.lesson]);
    });

    // 渲染内容
    content.innerHTML = `
      <article class="lesson">
        <h2>${data.title}</h2>
        <div class="meta">
          <span>第 ${data.week} 周</span>
          <span>${data.duration}</span>
          <span>难度：${data.difficulty}</span>
          ${data.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
        ${data.content}
        <div class="nav-row">
          <button class="nav-btn" id="prev-btn">← 上一节</button>
          <button class="complete-btn ${completed[id] ? 'done' : ''}" id="complete-btn">
            ${completed[id] ? '✓ 已完成' : '标记为完成'}
          </button>
          <button class="nav-btn" id="next-btn">下一节 →</button>
        </div>
      </article>
    `;

    // 导航逻辑
    const allLessons = Object.keys(lessons);
    const idx = allLessons.indexOf(id);
    document.getElementById('prev-btn').disabled = idx === 0;
    document.getElementById('next-btn').disabled = idx === allLessons.length - 1;
    document.getElementById('prev-btn').onclick = () => renderLesson(allLessons[idx - 1]);
    document.getElementById('next-btn').onclick = () => renderLesson(allLessons[idx + 1]);
    document.getElementById('complete-btn').onclick = () => toggleComplete(id);

    // 滚动到顶
    content.scrollTop = 0;
    window.scrollTo(0, 0);

    // 更新进度
    updateProgress();
  }

  function toggleComplete(id) {
    if (completed[id]) {
      delete completed[id];
    } else {
      completed[id] = true;
    }
    localStorage.setItem('fib-completed', JSON.stringify(completed));
    renderLesson(id);
  }

  function updateProgress() {
    const total = Object.keys(lessons).length;
    const done = Object.keys(completed).length;
    const pct = Math.round((done / total) * 100);
    progressFill.style.width = pct + '%';
    progressPct.textContent = pct + '%';
  }

  // ===== 笔记 =====
  noteToggle.addEventListener('click', () => {
    const hidden = notePanel.hasAttribute('hidden');
    if (hidden) {
      notePanel.removeAttribute('hidden');
      // 加载当前课的笔记
      noteArea.value = localStorage.getItem('fib-note-' + currentLesson) || '';
    } else {
      notePanel.setAttribute('hidden', '');
    }
  });

  noteArea.addEventListener('input', () => {
    localStorage.setItem('fib-note-' + currentLesson, noteArea.value);
  });

  noteClear.addEventListener('click', () => {
    if (confirm('确定清空本节笔记？')) {
      noteArea.value = '';
      localStorage.removeItem('fib-note-' + currentLesson);
    }
  });

  // ===== 侧边栏点击 =====
  sidebar.addEventListener('click', (e) => {
    if (e.target.classList.contains('lesson-btn')) {
      renderLesson(e.target.dataset.lesson);
    }
  });

  // ===== 键盘快捷键 =====
  document.addEventListener('keydown', (e) => {
    if (e.target === noteArea) return;
    const allLessons = Object.keys(lessons);
    const idx = allLessons.indexOf(currentLesson);
    if (e.key === 'ArrowLeft' && idx > 0) renderLesson(allLessons[idx - 1]);
    if (e.key === 'ArrowRight' && idx < allLessons.length - 1) renderLesson(allLessons[idx + 1]);
  });

  // ===== 启动 =====
  renderLesson('1-1');
  updateProgress();
})();
