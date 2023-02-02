/**
 * @version 1.0.0
 * @file 원티드 프리온보딩 프론트엔드 챌린지 사전과제 - Todo 앱을 JSDoc으로 문서화
 * @author NARA BAEK
 * @see <a href="https://github.com/nr-baek/wanted-pre-onboarding-challenge-fe-2" >https://github.com/nr-baek/wanted-pre-onboarding-challenge-fe-2 </a>
 */

/**
 * @typedef {Object} Todo
 * @property {number} id - 할 일 아이디
 * @property {string} content - 내용
 * @property {boolean} isCompleted - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * 할 일 목록
 * @type {Todo[]}
 */
const todos = [];

/**
 * 할 일 추가
 * @function addTodo
 * @param {string} content - 할 일 내용
 * @param {string} [category] - 카테고리
 * @param {string[]} [tags] - 태그들
 */
function addTodo(content, category, tags) {}

/**
 * 할 일 조회(parameter에 id가 전달되지 않으면 모든 할 일을 조회함)
 * @function getTodo
 * @param {number} [id] - 할 일 id
 */
function getTodo(id) {}

/**
 * 할 일의 내용 수정
 * @function editTodoContent
 * @param {number} id - 할 일 id
 * @param {string} content - 할 일 내용
 */
function editTodoContent(id, content) {}

/**
 * 할 일의 완료 여부 수정
 * @function editTodoCompleted
 * @param {number} id - 할 일 id
 * @param {boolean} isCompleted - 완료 여부
 */
function editTodoCompleted(id, isCompleted) {}

/**
 * 할 일의 카테고리 수정
 * @function editTodoCategory
 * @param {number} id - 할 일 id
 * @param {string} category - 카테고리
 */
function editTodoCategory(id, category) {}

/**
 * id에 해당하는 할 일의 특정 태그 수정
 * @function editTodoTag
 * @param {number} id - 할 일 id
 * @param {number} indexOfTag - 수정할 태그의 인덱스
 * @param {string} tag - 태그명
 */
function editTodoTag(id, indexOfTag, tag) {}

/**
 * 할 일 삭제 (parameter에 id가 전달되지 않으면 모든 할 일을 삭제함)
 * @function deleteTodo
 * @param {number} [id] - 할 일 id
 */
function deleteTodo(id) {}

/**
 * 특정 할 일의 특정 태그를 삭제 (parameter에 태그의 인덱스가 전달되지 않으면 할 일에 해당하는 모든 태그를 삭제함)
 * @function deleteTagOfTodo
 * @param {number} id - 할 일 id
 * @param {number} [indexOfTag] - 삭제할 태그의 인덱스
 */
function deleteTagOfTodo(id, indexOfTag) {}
