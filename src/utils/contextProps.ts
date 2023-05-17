import { GetServerSidePropsContext } from "next";


export function serializeContext(context: GetServerSidePropsContext) {
  return {
    req: context.req,
    // res: context.res,
  };
}
