# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateMovie, useUpsertUser, useAddReview, useDeleteReview, useCreateCategory, useUpdateCategory, useDeleteCategory, useCreateCourse, useCreateCourseModule, useCreateCourseLesson } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateMovie(createMovieVars);

const { data, isPending, isSuccess, isError, error } = useUpsertUser(upsertUserVars);

const { data, isPending, isSuccess, isError, error } = useAddReview(addReviewVars);

const { data, isPending, isSuccess, isError, error } = useDeleteReview(deleteReviewVars);

const { data, isPending, isSuccess, isError, error } = useCreateCategory(createCategoryVars);

const { data, isPending, isSuccess, isError, error } = useUpdateCategory(updateCategoryVars);

const { data, isPending, isSuccess, isError, error } = useDeleteCategory(deleteCategoryVars);

const { data, isPending, isSuccess, isError, error } = useCreateCourse(createCourseVars);

const { data, isPending, isSuccess, isError, error } = useCreateCourseModule(createCourseModuleVars);

const { data, isPending, isSuccess, isError, error } = useCreateCourseLesson(createCourseLessonVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createMovie, upsertUser, addReview, deleteReview, createCategory, updateCategory, deleteCategory, createCourse, createCourseModule, createCourseLesson } from '@dataconnect/generated';


// Operation CreateMovie:  For variables, look at type CreateMovieVars in ../index.d.ts
const { data } = await CreateMovie(dataConnect, createMovieVars);

// Operation UpsertUser:  For variables, look at type UpsertUserVars in ../index.d.ts
const { data } = await UpsertUser(dataConnect, upsertUserVars);

// Operation AddReview:  For variables, look at type AddReviewVars in ../index.d.ts
const { data } = await AddReview(dataConnect, addReviewVars);

// Operation DeleteReview:  For variables, look at type DeleteReviewVars in ../index.d.ts
const { data } = await DeleteReview(dataConnect, deleteReviewVars);

// Operation CreateCategory:  For variables, look at type CreateCategoryVars in ../index.d.ts
const { data } = await CreateCategory(dataConnect, createCategoryVars);

// Operation UpdateCategory:  For variables, look at type UpdateCategoryVars in ../index.d.ts
const { data } = await UpdateCategory(dataConnect, updateCategoryVars);

// Operation DeleteCategory:  For variables, look at type DeleteCategoryVars in ../index.d.ts
const { data } = await DeleteCategory(dataConnect, deleteCategoryVars);

// Operation CreateCourse:  For variables, look at type CreateCourseVars in ../index.d.ts
const { data } = await CreateCourse(dataConnect, createCourseVars);

// Operation CreateCourseModule:  For variables, look at type CreateCourseModuleVars in ../index.d.ts
const { data } = await CreateCourseModule(dataConnect, createCourseModuleVars);

// Operation CreateCourseLesson:  For variables, look at type CreateCourseLessonVars in ../index.d.ts
const { data } = await CreateCourseLesson(dataConnect, createCourseLessonVars);


```