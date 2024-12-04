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
  
    // 삭제 버튼 생성
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.classList.add('delete-btn');
  
    // 삭제 버튼 클릭 시 할 일 항목 제거
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });
  
    // 요소를 li에 추가
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    // 입력 필드 초기화
    taskInput.value = '';
  });
  