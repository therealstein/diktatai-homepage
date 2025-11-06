<template>
  <div class="flex flex-col gap-4">
    <!-- Rechnungskauf Option (only shown for yearly plan and non-English locale) -->
    <div
      v-if="showInvoiceOption"
      class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border cursor-pointer"
      :class="[
        selectedPaymentMethod === 'invoice'
          ? 'border-primary border-2'
          : 'border-base-300',
      ]"
      @click="selectedPaymentMethod = 'invoice'"
    >
      <div class="card-body">
        <div class="flex items-center gap-4">
          <input
            type="radio"
            name="paymentMethod"
            value="invoice"
            v-model="selectedPaymentMethod"
            class="radio radio-primary"
          />
          <div>
            <h3 class="card-title text-lg">{{ $t('payment.invoiceTitle') }}</h3>
            <p class="text-sm opacity-70">
              {{ $t('payment.invoiceDescription') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Stripe Payment Option -->
    <div
      class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300 border cursor-pointer"
      :class="[
        selectedPaymentMethod === 'stripe'
          ? 'border-primary border-2'
          : 'border-base-300',
      ]"
      @click="selectedPaymentMethod = 'stripe'"
    >
      <div class="card-body">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <input
              type="radio"
              name="paymentMethod"
              value="stripe"
              v-model="selectedPaymentMethod"
              class="radio radio-primary"
            />
            <div>
              <h3 class="card-title text-lg">
                {{ $t('payment.creditCardTitle') }}
              </h3>
            </div>
          </div>

          <div class="flex gap-2">
            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-visa"
            >
              <title id="pi-visa">Visa</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <path
                d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                fill="#142688"
              ></path>
            </svg>
            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-master"
            >
              <title id="pi-master">Mastercard</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
              <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
              <path
                fill="#FF5F00"
                d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
              ></path>
            </svg>
            <!-- Apple Pay Badge -->

            <!-- Google Pay Badge -->
          </div>
        </div>

        <p class="text-sm opacity-70 mt-4">
          {{ $t('payment.creditCardDescription') }}
        </p>
      </div>
    </div>

    <!-- Action Button -->
    <button
      class="btn btn-primary btn-lg w-full mt-4"
      @click="$emit('process', selectedPaymentMethod)"
      :disabled="processing"
    >
      <span
        v-if="processing"
        class="loading loading-spinner loading-sm mr-2"
      ></span>
      {{
        processing
          ? $t('payment.processing')
          : selectedPaymentMethod === 'invoice'
            ? $t('payment.completePurchase')
            : $t('payment.proceedToCreditCard')
      }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

// Props
const props = defineProps<{
  planIdentifier?: string;
  processing?: boolean;
}>();

// State
const selectedPaymentMethod = ref('stripe');
const { locale } = useI18n();

// Emits
const emit = defineEmits<{
  (e: 'process', method: string): void;
  (e: 'update:payment-method', method: string): void;
}>();

// Watch for payment method changes and emit them
watch(selectedPaymentMethod, (newMethod) => {
  emit('update:payment-method', newMethod);
}, { immediate: true });

// Computed
const isYearlyPlan = computed(() => {
  return props.planIdentifier === 'yearly';
});

const showInvoiceOption = computed(() => {
  return isYearlyPlan.value && locale.value !== 'en';
});
</script>
