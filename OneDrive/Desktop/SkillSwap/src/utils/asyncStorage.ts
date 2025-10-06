import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from './constants';

/**util function to store token in async storage after login or anytime a new is generated */
export const storeUserToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token);
  } catch (e: any) {
    console.log(e);
    // saving error
  }
};

export const getUserToken = async () => {
  try {
    const value = await AsyncStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};
/**After expiration of token, clear the storage and remove the token from storage */
export const removeUserToken = async () => {
  try {
    await AsyncStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    return true;
  } catch (exception: any) {
    console.log(exception);
    return false;
  }
};

/**Set user this should be called after login or signup
and also value in get user by id changes or other user data being stored in the user */
export const setUser = async (user: any) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem(USER_STORAGE_KEY, jsonValue);
  } catch (e) {
    console.log(e);
    // saving error
  }
};

export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(USER_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    // error reading value
  }
};

/**Remove both token and user from the async storage */
export const clearStoreUser = async () => {
  try {
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
    await AsyncStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    return true;
  } catch (exception) {
    console.log("clearStoreUser exceptions: ",exception);
    return false;
  }
};