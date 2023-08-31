<!-- <template>
  <div></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonAlert, alertController } from '@ionic/vue'

const props = defineProps(['text', 'message', 'callback', 'show'])

const showDialog = async () => {
  console.log('sd')
  const alert = await alertController.create({
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['OK'],
  })
}
</script>

<style scoped></style> -->
