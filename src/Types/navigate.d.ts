export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      Home: {
        user: {
          id: string;
          name: string;
        }
      };
      Task: {
        item: {
          title: string;
        }
      };
      AuthenticatedRoute: undefined;
    }
  }
}