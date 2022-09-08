import { ToastSeverity } from "primevue/api";
import { app } from "@/main";

const lifeTime = 3000;

export function showInfo(summary, body) {
  app.config.globalProperties.$toast.add({
    severity: ToastSeverity.INFO,
    summary: summary,
    detail: body,
    life: lifeTime,
  });
}

export function showError(title, body) {
  app.config.globalProperties.$toast.add({
    severity: ToastSeverity.ERROR,
    summary: title,
    detail: body,
    life: lifeTime,
  });
}

export function showSuccess(summary, body) {
  app.config.globalProperties.$toast.add({
    severity: ToastSeverity.SUCCESS,
    summary: summary,
    detail: body,
    life: lifeTime,
  });
}
