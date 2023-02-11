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

const addTodo: AddTodo = function (content, category, tags) {
  const todoId = todos.length > 0 ? todos[todos.length].id + 1 : 1;
  const todo: Todo = {
    id: todoId,
    content,
    category: category || "",
    tags,
    isCompleted: false,
  };

  todos.push(todo);
};

// 할 일 조회(parameter에 id가 전달되지 않으면 모든 할 일을 조회함)
interface GetTodo {
  (id?: number): void;
}

const getTodo: GetTodo = function (id) {
  if (id) {
    const todo: Todo | undefined = todos.find(todoEl => todoEl.id === id);
    console.log(todo || "일치하는 todo가 없습니다");
  } else {
    console.log(todos);
  }
};

// 할 일의 내용 수정
interface EditTodoContent {
  (id: number, content: string): void;
}

const editTodoContent: EditTodoContent = function (id, content) {
  const todo: Todo | undefined = todos.find(todoEl => todoEl.id === id);
  if (todo) {
    todo.content = content;
  } else {
    console.log("id를 확인하세요.");
  }
};

// 할 일의 완료 여부 수정
interface EditTodoCompleted {
  (id: number, isCompleted: boolean): void;
}

const editTodoCompleted: EditTodoCompleted = function (id, isCompleted) {
  const todo: Todo | undefined = todos.find(todoEl => todoEl.id === id);
  if (todo) {
    todo.isCompleted = isCompleted;
  } else {
    console.log("id를 확인하세요.");
  }
};

// 할 일의 카테고리 수정
interface EditTodoCategory {
  (id: number, category: string): void;
}

const editTodoCategory: EditTodoCategory = function (id, category) {
  const todo: Todo | undefined = todos.find(todoEl => todoEl.id === id);
  if (todo) {
    todo.category = category;
  } else {
    console.log("id를 확인하세요.");
  }
};

// id에 해당하는 할 일의 특정 태그 수정
interface EditTodoTag {
  (id: number, indexOfTag: number, tag: string): void;
}

const editTodoTag: EditTodoTag = function (id, indexOfTag, tag) {
  const todo: Todo | undefined = todos.find(todoEl => todoEl.id === id);
  if (todo) {
    if (todo.tags && todo.tags[indexOfTag]) {
      todo.tags[indexOfTag] = tag;
    } else {
      console.log("tags의 index를 확인하세요.");
    }
  } else {
    console.log("todo의 id를 확인하세요.");
  }
};

// 할 일 삭제 (parameter에 id가 전달되지 않으면 모든 할 일을 삭제함)
interface DeleteTodo {
  (id?: number): void;
}

const deleteTodo: DeleteTodo = function (id) {
  const todoIndex: number | undefined = todos.findIndex(
    todoEl => todoEl.id === id,
  );
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  } else {
    console.log("id를 확인하세요.");
  }
};

// 특정 할 일의 특정 태그를 삭제 (parameter에 태그의 인덱스가 전달되지 않으면 할 일에 해당하는 모든 태그를 삭제함)
interface DeleteTagOfTodo {
  (id: number, indexOfTag?: number): void;
}

const deleteTagOfTodo: DeleteTagOfTodo = function (id, indexOfTag) {
  const todo: Todo | undefined = todos.find(todoEl => todoEl.id === id);
  if (todo) {
    if (indexOfTag === undefined) {
      todo.tags = [];
    } else if (todo.tags && todo.tags[indexOfTag]) {
      todo.tags.splice(indexOfTag, 1);
    } else {
      console.log("tags의 index를 확인하세요.");
    }
  } else {
    console.log("todo의 id를 확인하세요.");
  }
};
