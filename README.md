# Todolist created with typescript

타입스크립트를 사용하여 Todolist 만들기

**react-icons, styled-components 사용**  
yarn add react-icons styled-components  
yarn add @types/styled-components (typescript에 필요한 styled-components)

**eslint, prettier 사용**  
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev  
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev

### TodoTemplate

Todolist의 레이아웃을 설정하는 컴포넌트. 페이지의 중앙에 그림자가 적용된 흰색 박스.

### TodoHead

오늘 날짜와 요일을 보여주고, 앞으로 해야할 일이 몇 개 남았는지 표시.

### TodoList

할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map을 사용하여 여러개의 TodoItem 컴포넌트를 렌더링.

### TodoItem

각 할 일에 대한 정보를 렌더링해주는 컴포넌트.  
좌측에 있는 원을 누르면 할 일의 완료 여부 toggle 가능.  
할 일이 완료되었을 땐 좌측에 체크 표시되고 텍스트 색상이 연해짐.  
마우스 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목 삭제.

### TodoCreate

새로운 할 일을 등록할 수 있게 해주는 컴포넌트.  
TodoTemplate의 하단부에 초록색 원 버튼을 렌더링해주고, 이를 클릭하면 할일을 입력할 수 있는 폼이 나타남.
