import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddReviewData {
  review_upsert: Review_Key;
}

export interface AddReviewVariables {
  movieId: UUIDString;
  rating: number;
  reviewText: string;
}

export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CourseLesson_Key {
  id: UUIDString;
  __typename?: 'CourseLesson_Key';
}

export interface CourseModule_Key {
  id: UUIDString;
  __typename?: 'CourseModule_Key';
}

export interface Course_Key {
  id: UUIDString;
  __typename?: 'Course_Key';
}

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface CreateCategoryVariables {
  name: string;
  slug: string;
  imageUrl?: string | null;
  parentId?: UUIDString | null;
}

export interface CreateCourseData {
  course_insert: Course_Key;
}

export interface CreateCourseLessonData {
  courseLesson_insert: CourseLesson_Key;
}

export interface CreateCourseLessonVariables {
  moduleId: UUIDString;
  title: string;
  orderIndex: number;
  type: string;
  isFree: boolean;
  vimeoId?: string | null;
  content?: string | null;
}

export interface CreateCourseModuleData {
  courseModule_insert: CourseModule_Key;
}

export interface CreateCourseModuleVariables {
  courseId: UUIDString;
  title: string;
  orderIndex: number;
}

export interface CreateCourseVariables {
  title: string;
  description?: string | null;
  promoVideoVimeoId?: string | null;
  price: number;
  discountPrice?: number | null;
  visibilityStatus: string;
  instructorId: UUIDString;
  categoryId: UUIDString;
}

export interface CreateMovieData {
  movie_insert: Movie_Key;
}

export interface CreateMovieVariables {
  title: string;
  genre: string;
  imageUrl: string;
}

export interface DeleteCategoryData {
  category_delete?: Category_Key | null;
}

export interface DeleteCategoryVariables {
  id: UUIDString;
}

export interface DeleteReviewData {
  review_delete?: Review_Key | null;
}

export interface DeleteReviewVariables {
  movieId: UUIDString;
}

export interface GetCurrentUserData {
  users: ({
    id: UUIDString;
    firstName: string;
    lastName: string;
    email: string;
    headline?: string | null;
    bio?: string | null;
    website?: string | null;
    twitterUrl?: string | null;
    instagramUrl?: string | null;
    linkedinUrl?: string | null;
    photoUrl?: string | null;
    notifyEnrollments: boolean;
    notifyQuestions: boolean;
    notifyMarketing: boolean;
    createdAt?: TimestampString | null;
  } & User_Key)[];
}

export interface GetCurrentUserVariables {
  authUid: string;
}

export interface GetMovieByIdData {
  movie?: {
    id: UUIDString;
    title: string;
    imageUrl: string;
    genre?: string | null;
    metadata?: {
      rating?: number | null;
      releaseYear?: number | null;
      description?: string | null;
    };
      reviews: ({
        reviewText?: string | null;
        reviewDate: DateString;
        rating?: number | null;
        user: {
          id: UUIDString;
          firstName: string;
          lastName: string;
        } & User_Key;
      })[];
  } & Movie_Key;
}

export interface GetMovieByIdVariables {
  id: UUIDString;
}

export interface ListCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    slug: string;
    imageUrl?: string | null;
    parentId?: UUIDString | null;
    createdAt: TimestampString;
  } & Category_Key)[];
}

export interface ListCoursesData {
  courses: ({
    id: UUIDString;
    title: string;
    visibilityStatus: string;
    instructor: {
      id: UUIDString;
      firstName: string;
      lastName: string;
    } & User_Key;
      category: {
        id: UUIDString;
        name: string;
      } & Category_Key;
  } & Course_Key)[];
}

export interface ListMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    imageUrl: string;
    genre?: string | null;
  } & Movie_Key)[];
}

export interface ListUserReviewsData {
  user?: {
    id: UUIDString;
    firstName: string;
    lastName: string;
    reviews: ({
      rating?: number | null;
      reviewDate: DateString;
      reviewText?: string | null;
      movie: {
        id: UUIDString;
        title: string;
      } & Movie_Key;
    })[];
  } & User_Key;
}

export interface ListUsersData {
  users: ({
    id: UUIDString;
    firstName: string;
    lastName: string;
    email: string;
    authUid: string;
  } & User_Key)[];
}

export interface MovieMetadata_Key {
  id: UUIDString;
  __typename?: 'MovieMetadata_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Review_Key {
  userId: UUIDString;
  movieId: UUIDString;
  __typename?: 'Review_Key';
}

export interface SearchMovieData {
  movies: ({
    id: UUIDString;
    title: string;
    genre?: string | null;
    imageUrl: string;
  } & Movie_Key)[];
}

export interface SearchMovieVariables {
  titleInput?: string | null;
  genre?: string | null;
}

export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}

export interface UpdateCategoryVariables {
  id: UUIDString;
  name?: string | null;
  slug?: string | null;
  imageUrl?: string | null;
  parentId?: UUIDString | null;
}

export interface UpdateUserNotificationsData {
  user_update?: User_Key | null;
}

export interface UpdateUserNotificationsVariables {
  id: UUIDString;
  notifyEnrollments: boolean;
  notifyQuestions: boolean;
  notifyMarketing: boolean;
}

export interface UpdateUserProfileData {
  user_update?: User_Key | null;
}

export interface UpdateUserProfileVariables {
  id: UUIDString;
  firstName: string;
  lastName: string;
  headline?: string | null;
  bio?: string | null;
  website?: string | null;
  twitterUrl?: string | null;
  instagramUrl?: string | null;
  linkedinUrl?: string | null;
  photoUrl?: string | null;
}

export interface UpsertUserData {
  user_insert: User_Key;
}

export interface UpsertUserVariables {
  firstName: string;
  lastName: string;
  email: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateMovieRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMovieVariables): MutationRef<CreateMovieData, CreateMovieVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMovieVariables): MutationRef<CreateMovieData, CreateMovieVariables>;
  operationName: string;
}
export const createMovieRef: CreateMovieRef;

export function createMovie(vars: CreateMovieVariables): MutationPromise<CreateMovieData, CreateMovieVariables>;
export function createMovie(dc: DataConnect, vars: CreateMovieVariables): MutationPromise<CreateMovieData, CreateMovieVariables>;

interface UpsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  operationName: string;
}
export const upsertUserRef: UpsertUserRef;

export function upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;
export function upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface AddReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddReviewVariables): MutationRef<AddReviewData, AddReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddReviewVariables): MutationRef<AddReviewData, AddReviewVariables>;
  operationName: string;
}
export const addReviewRef: AddReviewRef;

export function addReview(vars: AddReviewVariables): MutationPromise<AddReviewData, AddReviewVariables>;
export function addReview(dc: DataConnect, vars: AddReviewVariables): MutationPromise<AddReviewData, AddReviewVariables>;

interface DeleteReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
  operationName: string;
}
export const deleteReviewRef: DeleteReviewRef;

export function deleteReview(vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;
export function deleteReview(dc: DataConnect, vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;

interface CreateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  operationName: string;
}
export const createCategoryRef: CreateCategoryRef;

export function createCategory(vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;
export function createCategory(dc: DataConnect, vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface UpdateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  operationName: string;
}
export const updateCategoryRef: UpdateCategoryRef;

export function updateCategory(vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;
export function updateCategory(dc: DataConnect, vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;

interface DeleteCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteCategoryVariables): MutationRef<DeleteCategoryData, DeleteCategoryVariables>;
  operationName: string;
}
export const deleteCategoryRef: DeleteCategoryRef;

export function deleteCategory(vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;
export function deleteCategory(dc: DataConnect, vars: DeleteCategoryVariables): MutationPromise<DeleteCategoryData, DeleteCategoryVariables>;

interface CreateCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCourseVariables): MutationRef<CreateCourseData, CreateCourseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCourseVariables): MutationRef<CreateCourseData, CreateCourseVariables>;
  operationName: string;
}
export const createCourseRef: CreateCourseRef;

export function createCourse(vars: CreateCourseVariables): MutationPromise<CreateCourseData, CreateCourseVariables>;
export function createCourse(dc: DataConnect, vars: CreateCourseVariables): MutationPromise<CreateCourseData, CreateCourseVariables>;

interface CreateCourseModuleRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCourseModuleVariables): MutationRef<CreateCourseModuleData, CreateCourseModuleVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCourseModuleVariables): MutationRef<CreateCourseModuleData, CreateCourseModuleVariables>;
  operationName: string;
}
export const createCourseModuleRef: CreateCourseModuleRef;

export function createCourseModule(vars: CreateCourseModuleVariables): MutationPromise<CreateCourseModuleData, CreateCourseModuleVariables>;
export function createCourseModule(dc: DataConnect, vars: CreateCourseModuleVariables): MutationPromise<CreateCourseModuleData, CreateCourseModuleVariables>;

interface CreateCourseLessonRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCourseLessonVariables): MutationRef<CreateCourseLessonData, CreateCourseLessonVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCourseLessonVariables): MutationRef<CreateCourseLessonData, CreateCourseLessonVariables>;
  operationName: string;
}
export const createCourseLessonRef: CreateCourseLessonRef;

export function createCourseLesson(vars: CreateCourseLessonVariables): MutationPromise<CreateCourseLessonData, CreateCourseLessonVariables>;
export function createCourseLesson(dc: DataConnect, vars: CreateCourseLessonVariables): MutationPromise<CreateCourseLessonData, CreateCourseLessonVariables>;

interface UpdateUserProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserProfileVariables): MutationRef<UpdateUserProfileData, UpdateUserProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserProfileVariables): MutationRef<UpdateUserProfileData, UpdateUserProfileVariables>;
  operationName: string;
}
export const updateUserProfileRef: UpdateUserProfileRef;

export function updateUserProfile(vars: UpdateUserProfileVariables): MutationPromise<UpdateUserProfileData, UpdateUserProfileVariables>;
export function updateUserProfile(dc: DataConnect, vars: UpdateUserProfileVariables): MutationPromise<UpdateUserProfileData, UpdateUserProfileVariables>;

interface UpdateUserNotificationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserNotificationsVariables): MutationRef<UpdateUserNotificationsData, UpdateUserNotificationsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserNotificationsVariables): MutationRef<UpdateUserNotificationsData, UpdateUserNotificationsVariables>;
  operationName: string;
}
export const updateUserNotificationsRef: UpdateUserNotificationsRef;

export function updateUserNotifications(vars: UpdateUserNotificationsVariables): MutationPromise<UpdateUserNotificationsData, UpdateUserNotificationsVariables>;
export function updateUserNotifications(dc: DataConnect, vars: UpdateUserNotificationsVariables): MutationPromise<UpdateUserNotificationsData, UpdateUserNotificationsVariables>;

interface ListMoviesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMoviesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMoviesData, undefined>;
  operationName: string;
}
export const listMoviesRef: ListMoviesRef;

export function listMovies(options?: ExecuteQueryOptions): QueryPromise<ListMoviesData, undefined>;
export function listMovies(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMoviesData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUserReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUserReviewsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUserReviewsData, undefined>;
  operationName: string;
}
export const listUserReviewsRef: ListUserReviewsRef;

export function listUserReviews(options?: ExecuteQueryOptions): QueryPromise<ListUserReviewsData, undefined>;
export function listUserReviews(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUserReviewsData, undefined>;

interface GetMovieByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMovieByIdVariables): QueryRef<GetMovieByIdData, GetMovieByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMovieByIdVariables): QueryRef<GetMovieByIdData, GetMovieByIdVariables>;
  operationName: string;
}
export const getMovieByIdRef: GetMovieByIdRef;

export function getMovieById(vars: GetMovieByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetMovieByIdData, GetMovieByIdVariables>;
export function getMovieById(dc: DataConnect, vars: GetMovieByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetMovieByIdData, GetMovieByIdVariables>;

interface SearchMovieRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: SearchMovieVariables): QueryRef<SearchMovieData, SearchMovieVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: SearchMovieVariables): QueryRef<SearchMovieData, SearchMovieVariables>;
  operationName: string;
}
export const searchMovieRef: SearchMovieRef;

export function searchMovie(vars?: SearchMovieVariables, options?: ExecuteQueryOptions): QueryPromise<SearchMovieData, SearchMovieVariables>;
export function searchMovie(dc: DataConnect, vars?: SearchMovieVariables, options?: ExecuteQueryOptions): QueryPromise<SearchMovieData, SearchMovieVariables>;

interface ListCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCategoriesData, undefined>;
  operationName: string;
}
export const listCategoriesRef: ListCategoriesRef;

export function listCategories(options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;
export function listCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCategoriesData, undefined>;

interface ListCoursesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCoursesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCoursesData, undefined>;
  operationName: string;
}
export const listCoursesRef: ListCoursesRef;

export function listCourses(options?: ExecuteQueryOptions): QueryPromise<ListCoursesData, undefined>;
export function listCourses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListCoursesData, undefined>;

interface GetCurrentUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCurrentUserVariables): QueryRef<GetCurrentUserData, GetCurrentUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCurrentUserVariables): QueryRef<GetCurrentUserData, GetCurrentUserVariables>;
  operationName: string;
}
export const getCurrentUserRef: GetCurrentUserRef;

export function getCurrentUser(vars: GetCurrentUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, GetCurrentUserVariables>;
export function getCurrentUser(dc: DataConnect, vars: GetCurrentUserVariables, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, GetCurrentUserVariables>;

