interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
  category: string;
  tags?: string[];
}

let todos: Todo[] = [];

// 할 일 추가
interface AddTodo {
  (content: string, category?: string, tags?: string[]): void;
}

const addTodo: AddTodo = function (content, category, tags) {};

// 할 일 조회(parameter에 id가 전달되지 않으면 모든 할 일을 조회함)
interface GetTodo {
  (id?: number): void;
}

const getTodo: GetTodo = function (id) {};

// 할 일의 내용 수정
interface EditTodoContent {
  (id: number, content: string): void;
}

const editTodoContent: EditTodoContent = function (id, content) {};

// 할 일의 완료 여부 수정
interface EditTodoCompleted {
  (id: number, isCompleted: boolean): void;
}

const editTodoCompleted: EditTodoCompleted = function (id, isCompleted) {};

// 할 일의 카테고리 수정
interface EditTodoCategory {
  (id: number, category: string): void;
}

const editTodoCategory: EditTodoCategory = function (id, category) {};

// id에 해당하는 할 일의 특정 태그 수정
interface EditTodoTag {
  (id: number, indexOfTag: number, tag: string): void;
}

const editTodoTag: EditTodoTag = function (id, indexOfTag, tag) {};

// 할 일 삭제 (parameter에 id가 전달되지 않으면 모든 할 일을 삭제함)
interface DeleteTodo {
  (id?: number): void;
}

const deleteTodo: DeleteTodo = function (id) {};

// 특정 할 일의 특정 태그를 삭제 (parameter에 태그의 인덱스가 전달되지 않으면 할 일에 해당하는 모든 태그를 삭제함)
interface DeleteTagOfTodo {
  (id: number, indexOfTag?: number): void;
}

const deleteTagOfTodo: DeleteTagOfTodo = function (id, indexOfTag) {};
