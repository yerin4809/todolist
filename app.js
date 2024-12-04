// HTML에서 요소 가져오기
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// 할 일 추가 기능
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim(); // 입력값 가져오기 및 공백 제거
  if (taskText === '') return; // 입력값이 없으면 함수 종료

  // 새로운 할 일 항목 생성
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = taskText;

  // 체크박스 상태에 따라 스타일 변경
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      span.style.textDecoration = 'line-through';
      span.style.color = 'gray';
    } else {
      span.style.textDecoration = 'none';
      span.style.color = 'black';
    }
  });

  // 생성된 요소를 li에 추가
  li.appendChild(checkbox);
  li.appendChild(span);
  taskList.appendChild(li);

  // 입력 필드 초기화
  taskInput.value = '';
});

taskList.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'SPAN') { // SPAN을 수정 대상으로 지정
      const newTask = prompt("수정할 내용을 입력하세요:", e.target.textContent);
      if (newTask !== null && newTask.trim() !== '') {
        e.target.textContent = newTask;
        e.target.style.textDecoration = 'none';  // 수정 후 취소선 제거
        e.target.style.color = 'black';  // 수정 후 색상 원상복구
      }
    }
  });