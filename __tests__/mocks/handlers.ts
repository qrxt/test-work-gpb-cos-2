import { serviceHandlers } from "../mocks/handlers/service";
import { servicesHandlers } from "../mocks/handlers/services";

export const handlers = [...serviceHandlers, ...servicesHandlers];
