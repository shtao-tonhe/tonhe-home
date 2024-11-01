
import Vrouter from "@/router"
const router = Vrouter
const systemCommon = {
  methods:{
    toPage( path, queryOV = {} ){
      console.log('路由', path, queryOV );
      router.push({
        path: path,
        query: queryOV
      })
    },
  },
}

export default systemCommon