import { LANGUAGE_RO } from "src/constants/languages";
import { SET_LANGUAGE } from "src/store/actions/app.action";

const initialState = {
  config: {
    language: {
      language: LANGUAGE_RO,
      strings: require("src/i18n/ro.json"),
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        config: {
          ...state.config,
          language: {
            ...state.language,
            language: action.payload,
            strings: require(`src/i18n/${action.payload.short}.json`),
          },
        },
      };
    default:
      return state;
  }
};
