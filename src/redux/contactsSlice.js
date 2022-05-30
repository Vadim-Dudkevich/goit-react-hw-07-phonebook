import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6294812d63b5d108c18ccfde.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: `/contacts`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { nanoid } from 'nanoid';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
//   reducers: {
//     deleteContact(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     addContact(state, action) {
//       const { name, number } = action.payload;
//       const contact = {
//         id: nanoid(),
//         name,
//         number,
//       };

//       state.items.some(contact => contact.name === name)
//         ? alert(`${name} is already in contacts`)
//         : (state.items = [contact, ...state.items]);
//     },
//     changeFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { deleteContact, addContact, changeFilter } =
//   contactsSlice.actions;

// export const getFilter = state => state.contacts.filter;
// export const getContacts = state => state.contacts.items;
