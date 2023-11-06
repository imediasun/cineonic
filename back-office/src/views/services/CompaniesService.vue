<script>
import axios from "../../axios"

export default class CompaniesService {

    async postCompaniesData(payload: any){
      return this.submit("/Companies-import",payload)
    }

    private async submit(
        endpoint:string,
        payload:any
    ){
      return new Promise((resolve,reject) => {
        axios.post(
            endpoint,payload
        ).then(resp => resolve(resp.data))
            .catch(error => reject(error))
      });
    }
}

</script>