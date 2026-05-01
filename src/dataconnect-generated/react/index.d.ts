import { CreateMovieData, CreateMovieVariables, UpsertUserData, UpsertUserVariables, AddReviewData, AddReviewVariables, DeleteReviewData, DeleteReviewVariables, CreateCategoryData, CreateCategoryVariables, UpdateCategoryData, UpdateCategoryVariables, DeleteCategoryData, DeleteCategoryVariables, CreateCourseData, CreateCourseVariables, CreateCourseModuleData, CreateCourseModuleVariables, CreateCourseLessonData, CreateCourseLessonVariables, UpdateUserProfileData, UpdateUserProfileVariables, UpdateUserNotificationsData, UpdateUserNotificationsVariables, ListMoviesData, ListUsersData, ListUserReviewsData, GetMovieByIdData, GetMovieByIdVariables, SearchMovieData, SearchMovieVariables, ListCategoriesData, ListCoursesData, GetCurrentUserData, GetCurrentUserVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateMovie(options?: useDataConnectMutationOptions<CreateMovieData, FirebaseError, CreateMovieVariables>): UseDataConnectMutationResult<CreateMovieData, CreateMovieVariables>;
export function useCreateMovie(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMovieData, FirebaseError, CreateMovieVariables>): UseDataConnectMutationResult<CreateMovieData, CreateMovieVariables>;

export function useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;
export function useUpsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;

export function useAddReview(options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseDataConnectMutationResult<AddReviewData, AddReviewVariables>;
export function useAddReview(dc: DataConnect, options?: useDataConnectMutationOptions<AddReviewData, FirebaseError, AddReviewVariables>): UseDataConnectMutationResult<AddReviewData, AddReviewVariables>;

export function useDeleteReview(options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseDataConnectMutationResult<DeleteReviewData, DeleteReviewVariables>;
export function useDeleteReview(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseDataConnectMutationResult<DeleteReviewData, DeleteReviewVariables>;

export function useCreateCategory(options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;
export function useCreateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCategoryData, FirebaseError, CreateCategoryVariables>): UseDataConnectMutationResult<CreateCategoryData, CreateCategoryVariables>;

export function useUpdateCategory(options?: useDataConnectMutationOptions<UpdateCategoryData, FirebaseError, UpdateCategoryVariables>): UseDataConnectMutationResult<UpdateCategoryData, UpdateCategoryVariables>;
export function useUpdateCategory(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateCategoryData, FirebaseError, UpdateCategoryVariables>): UseDataConnectMutationResult<UpdateCategoryData, UpdateCategoryVariables>;

export function useDeleteCategory(options?: useDataConnectMutationOptions<DeleteCategoryData, FirebaseError, DeleteCategoryVariables>): UseDataConnectMutationResult<DeleteCategoryData, DeleteCategoryVariables>;
export function useDeleteCategory(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteCategoryData, FirebaseError, DeleteCategoryVariables>): UseDataConnectMutationResult<DeleteCategoryData, DeleteCategoryVariables>;

export function useCreateCourse(options?: useDataConnectMutationOptions<CreateCourseData, FirebaseError, CreateCourseVariables>): UseDataConnectMutationResult<CreateCourseData, CreateCourseVariables>;
export function useCreateCourse(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCourseData, FirebaseError, CreateCourseVariables>): UseDataConnectMutationResult<CreateCourseData, CreateCourseVariables>;

export function useCreateCourseModule(options?: useDataConnectMutationOptions<CreateCourseModuleData, FirebaseError, CreateCourseModuleVariables>): UseDataConnectMutationResult<CreateCourseModuleData, CreateCourseModuleVariables>;
export function useCreateCourseModule(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCourseModuleData, FirebaseError, CreateCourseModuleVariables>): UseDataConnectMutationResult<CreateCourseModuleData, CreateCourseModuleVariables>;

export function useCreateCourseLesson(options?: useDataConnectMutationOptions<CreateCourseLessonData, FirebaseError, CreateCourseLessonVariables>): UseDataConnectMutationResult<CreateCourseLessonData, CreateCourseLessonVariables>;
export function useCreateCourseLesson(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCourseLessonData, FirebaseError, CreateCourseLessonVariables>): UseDataConnectMutationResult<CreateCourseLessonData, CreateCourseLessonVariables>;

export function useUpdateUserProfile(options?: useDataConnectMutationOptions<UpdateUserProfileData, FirebaseError, UpdateUserProfileVariables>): UseDataConnectMutationResult<UpdateUserProfileData, UpdateUserProfileVariables>;
export function useUpdateUserProfile(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserProfileData, FirebaseError, UpdateUserProfileVariables>): UseDataConnectMutationResult<UpdateUserProfileData, UpdateUserProfileVariables>;

export function useUpdateUserNotifications(options?: useDataConnectMutationOptions<UpdateUserNotificationsData, FirebaseError, UpdateUserNotificationsVariables>): UseDataConnectMutationResult<UpdateUserNotificationsData, UpdateUserNotificationsVariables>;
export function useUpdateUserNotifications(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserNotificationsData, FirebaseError, UpdateUserNotificationsVariables>): UseDataConnectMutationResult<UpdateUserNotificationsData, UpdateUserNotificationsVariables>;

export function useListMovies(options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, undefined>;
export function useListMovies(dc: DataConnect, options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useListUserReviews(options?: useDataConnectQueryOptions<ListUserReviewsData>): UseDataConnectQueryResult<ListUserReviewsData, undefined>;
export function useListUserReviews(dc: DataConnect, options?: useDataConnectQueryOptions<ListUserReviewsData>): UseDataConnectQueryResult<ListUserReviewsData, undefined>;

export function useGetMovieById(vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseDataConnectQueryResult<GetMovieByIdData, GetMovieByIdVariables>;
export function useGetMovieById(dc: DataConnect, vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData>): UseDataConnectQueryResult<GetMovieByIdData, GetMovieByIdVariables>;

export function useSearchMovie(vars?: SearchMovieVariables, options?: useDataConnectQueryOptions<SearchMovieData>): UseDataConnectQueryResult<SearchMovieData, SearchMovieVariables>;
export function useSearchMovie(dc: DataConnect, vars?: SearchMovieVariables, options?: useDataConnectQueryOptions<SearchMovieData>): UseDataConnectQueryResult<SearchMovieData, SearchMovieVariables>;

export function useListCategories(options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, undefined>;
export function useListCategories(dc: DataConnect, options?: useDataConnectQueryOptions<ListCategoriesData>): UseDataConnectQueryResult<ListCategoriesData, undefined>;

export function useListCourses(options?: useDataConnectQueryOptions<ListCoursesData>): UseDataConnectQueryResult<ListCoursesData, undefined>;
export function useListCourses(dc: DataConnect, options?: useDataConnectQueryOptions<ListCoursesData>): UseDataConnectQueryResult<ListCoursesData, undefined>;

export function useGetCurrentUser(vars: GetCurrentUserVariables, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, GetCurrentUserVariables>;
export function useGetCurrentUser(dc: DataConnect, vars: GetCurrentUserVariables, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, GetCurrentUserVariables>;
