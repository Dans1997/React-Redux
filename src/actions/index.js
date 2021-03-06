import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

// Using Redux Thunk to Return a Function to deal with Async Stuff
export const fetchPosts = () => async dispatch => 
{
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchUser = (id) => async dispatch => 
{
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}

// Overfetching Solution #1 -> Reusing Action Creators fetchPostsAndUsers()
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));

    /* BONUS: LODASH CHAIN EXAMPLE */
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}

// Overfetching Solution #2 -> MEMOIZE
// Downside: you only can call a unique ID once
/*
export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
})
*/